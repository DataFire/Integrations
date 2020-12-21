# @datafire/azure_network_applicationgateway

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_applicationgateway
```
```js
let azure_network_applicationgateway = require('@datafire/azure_network_applicationgateway').create({
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

### ApplicationGateways_ListAvailableRequestHeaders
Lists all available request headers.


```js
azure_network_applicationgateway.ApplicationGateways_ListAvailableRequestHeaders({}, context)
```

#### Input
* input `object`

#### Output
* output [ApplicationGatewayAvailableRequestHeadersResult](#applicationgatewayavailablerequestheadersresult)

### ApplicationGateways_ListAvailableResponseHeaders
Lists all available response headers.


```js
azure_network_applicationgateway.ApplicationGateways_ListAvailableResponseHeaders({}, context)
```

#### Input
* input `object`

#### Output
* output [ApplicationGatewayAvailableResponseHeadersResult](#applicationgatewayavailableresponseheadersresult)

### ApplicationGateways_ListAvailableServerVariables
Lists all available server variables.


```js
azure_network_applicationgateway.ApplicationGateways_ListAvailableServerVariables({}, context)
```

#### Input
* input `object`

#### Output
* output [ApplicationGatewayAvailableServerVariablesResult](#applicationgatewayavailableservervariablesresult)

### ApplicationGateways_ListAvailableSslOptions
Lists available Ssl options for configuring Ssl policy.


```js
azure_network_applicationgateway.ApplicationGateways_ListAvailableSslOptions({}, context)
```

#### Input
* input `object`

#### Output
* output [ApplicationGatewayAvailableSslOptions](#applicationgatewayavailablessloptions)

### ApplicationGateways_ListAvailableSslPredefinedPolicies
Lists all SSL predefined policies for configuring Ssl policy.


```js
azure_network_applicationgateway.ApplicationGateways_ListAvailableSslPredefinedPolicies({}, context)
```

#### Input
* input `object`

#### Output
* output [ApplicationGatewayAvailableSslPredefinedPolicies](#applicationgatewayavailablesslpredefinedpolicies)

### ApplicationGateways_GetSslPredefinedPolicy
Gets Ssl predefined policy with the specified policy name.


```js
azure_network_applicationgateway.ApplicationGateways_GetSslPredefinedPolicy({
  "predefinedPolicyName": ""
}, context)
```

#### Input
* input `object`
  * predefinedPolicyName **required** `string`: Name of Ssl predefined policy.

#### Output
* output [ApplicationGatewaySslPredefinedPolicy](#applicationgatewaysslpredefinedpolicy)

### ApplicationGateways_ListAvailableWafRuleSets
Lists all available web application firewall rule sets.


```js
azure_network_applicationgateway.ApplicationGateways_ListAvailableWafRuleSets({}, context)
```

#### Input
* input `object`

#### Output
* output [ApplicationGatewayAvailableWafRuleSetsResult](#applicationgatewayavailablewafrulesetsresult)

### ApplicationGateways_ListAll
Gets all the application gateways in a subscription.


```js
azure_network_applicationgateway.ApplicationGateways_ListAll({}, context)
```

#### Input
* input `object`

#### Output
* output [ApplicationGatewayListResult](#applicationgatewaylistresult)

### ApplicationGateways_List
Lists all application gateways in a resource group.


```js
azure_network_applicationgateway.ApplicationGateways_List({
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.

#### Output
* output [ApplicationGatewayListResult](#applicationgatewaylistresult)

### ApplicationGateways_Delete
Deletes the specified application gateway.


```js
azure_network_applicationgateway.ApplicationGateways_Delete({
  "resourceGroupName": "",
  "applicationGatewayName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * applicationGatewayName **required** `string`: The name of the application gateway.

#### Output
*Output schema unknown*

### ApplicationGateways_Get
Gets the specified application gateway.


```js
azure_network_applicationgateway.ApplicationGateways_Get({
  "resourceGroupName": "",
  "applicationGatewayName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * applicationGatewayName **required** `string`: The name of the application gateway.

#### Output
* output [ApplicationGateway](#applicationgateway)

### ApplicationGateways_UpdateTags
Updates the specified application gateway tags.


```js
azure_network_applicationgateway.ApplicationGateways_UpdateTags({
  "resourceGroupName": "",
  "applicationGatewayName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * applicationGatewayName **required** `string`: The name of the application gateway.
  * parameters **required** `object`: Tags object for patch operations.
    * tags `object`: Resource tags.

#### Output
* output [ApplicationGateway](#applicationgateway)

### ApplicationGateways_CreateOrUpdate
Creates or updates the specified application gateway.


```js
azure_network_applicationgateway.ApplicationGateways_CreateOrUpdate({
  "resourceGroupName": "",
  "applicationGatewayName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * applicationGatewayName **required** `string`: The name of the application gateway.
  * parameters **required** [ApplicationGateway](#applicationgateway)

#### Output
* output [ApplicationGateway](#applicationgateway)

### ApplicationGateways_BackendHealth
Gets the backend health of the specified application gateway in a resource group.


```js
azure_network_applicationgateway.ApplicationGateways_BackendHealth({
  "resourceGroupName": "",
  "applicationGatewayName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * applicationGatewayName **required** `string`: The name of the application gateway.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: Expands BackendAddressPool and BackendHttpSettings referenced in backend health.

#### Output
* output [ApplicationGatewayBackendHealth](#applicationgatewaybackendhealth)

### ApplicationGateways_BackendHealthOnDemand
Gets the backend health for given combination of backend pool and http setting of the specified application gateway in a resource group.


```js
azure_network_applicationgateway.ApplicationGateways_BackendHealthOnDemand({
  "resourceGroupName": "",
  "applicationGatewayName": "",
  "probeRequest": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * applicationGatewayName **required** `string`: The name of the application gateway.
  * $expand `string`: Expands BackendAddressPool and BackendHttpSettings referenced in backend health.
  * probeRequest **required** [ApplicationGatewayOnDemandProbe](#applicationgatewayondemandprobe)

#### Output
* output [ApplicationGatewayBackendHealthOnDemand](#applicationgatewaybackendhealthondemand)

### ApplicationGateways_Start
Starts the specified application gateway.


```js
azure_network_applicationgateway.ApplicationGateways_Start({
  "resourceGroupName": "",
  "applicationGatewayName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * applicationGatewayName **required** `string`: The name of the application gateway.

#### Output
*Output schema unknown*

### ApplicationGateways_Stop
Stops the specified application gateway in a resource group.


```js
azure_network_applicationgateway.ApplicationGateways_Stop({
  "resourceGroupName": "",
  "applicationGatewayName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * applicationGatewayName **required** `string`: The name of the application gateway.

#### Output
*Output schema unknown*



## Definitions

### ApplicationGateway
* ApplicationGateway `object`: Application gateway resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * identity `object`: Identity for the resource.
    * principalId `string`: The principal id of the system assigned identity. This property will only be provided for a system assigned identity.
    * tenantId `string`: The tenant id of the system assigned identity. This property will only be provided for a system assigned identity.
    * type `string` (values: SystemAssigned, UserAssigned, SystemAssigned, UserAssigned, None): The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.
    * userAssignedIdentities `object`: The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
  * properties [ApplicationGatewayPropertiesFormat](#applicationgatewaypropertiesformat)
  * zones `array`: A list of availability zones denoting where the resource needs to come from.
    * items `string`
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ApplicationGatewayAuthenticationCertificate
* ApplicationGatewayAuthenticationCertificate `object`: Authentication certificates of an application gateway.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the authentication certificate that is unique within an Application Gateway.
  * properties [ApplicationGatewayAuthenticationCertificatePropertiesFormat](#applicationgatewayauthenticationcertificatepropertiesformat)
  * type `string`: Type of the resource.
  * id `string`: Resource ID.

### ApplicationGatewayAuthenticationCertificatePropertiesFormat
* ApplicationGatewayAuthenticationCertificatePropertiesFormat `object`: Authentication certificates properties of an application gateway.
  * data `string`: Certificate public data.
  * provisioningState [ApplicationGatewayHttpListenerPropertiesFormat/properties/provisioningState](#applicationgatewayhttplistenerpropertiesformat/properties/provisioningstate)

### ApplicationGatewayAutoscaleConfiguration
* ApplicationGatewayAutoscaleConfiguration `object`: Application Gateway autoscale configuration.
  * maxCapacity `integer`: Upper bound on number of Application Gateway capacity.
  * minCapacity **required** `integer`: Lower bound on number of Application Gateway capacity.

### ApplicationGatewayAvailableRequestHeadersResult
* ApplicationGatewayAvailableRequestHeadersResult `array`: Response for ApplicationGatewayAvailableRequestHeaders API service call.
  * items `string`

### ApplicationGatewayAvailableResponseHeadersResult
* ApplicationGatewayAvailableResponseHeadersResult `array`: Response for ApplicationGatewayAvailableResponseHeaders API service call.
  * items `string`

### ApplicationGatewayAvailableServerVariablesResult
* ApplicationGatewayAvailableServerVariablesResult `array`: Response for ApplicationGatewayAvailableServerVariables API service call.
  * items `string`

### ApplicationGatewayAvailableSslOptions
* ApplicationGatewayAvailableSslOptions `object`: Response for ApplicationGatewayAvailableSslOptions API service call.
  * properties [ApplicationGatewayAvailableSslOptionsPropertiesFormat](#applicationgatewayavailablessloptionspropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ApplicationGatewayAvailableSslOptionsPropertiesFormat
* ApplicationGatewayAvailableSslOptionsPropertiesFormat `object`: Properties of ApplicationGatewayAvailableSslOptions.
  * availableCipherSuites `array`: List of available Ssl cipher suites.
    * items [CipherSuitesEnum](#ciphersuitesenum)
  * availableProtocols `array`: List of available Ssl protocols.
    * items [ProtocolsEnum](#protocolsenum)
  * defaultPolicy [PolicyNameEnum](#policynameenum)
  * predefinedPolicies `array`: List of available Ssl predefined policy.
    * items [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)

### ApplicationGatewayAvailableSslPredefinedPolicies
* ApplicationGatewayAvailableSslPredefinedPolicies `object`: Response for ApplicationGatewayAvailableSslOptions API service call.
  * nextLink `string`: URL to get the next set of results.
  * value `array`: List of available Ssl predefined policy.
    * items [ApplicationGatewaySslPredefinedPolicy](#applicationgatewaysslpredefinedpolicy)

### ApplicationGatewayAvailableWafRuleSetsResult
* ApplicationGatewayAvailableWafRuleSetsResult `object`: Response for ApplicationGatewayAvailableWafRuleSets API service call.
  * value `array`: The list of application gateway rule sets.
    * items [ApplicationGatewayFirewallRuleSet](#applicationgatewayfirewallruleset)

### ApplicationGatewayBackendAddress
* ApplicationGatewayBackendAddress `object`: Backend address of an application gateway.
  * fqdn `string`: Fully qualified domain name (FQDN).
  * ipAddress `string`: IP address.

### ApplicationGatewayBackendAddressPool
* ApplicationGatewayBackendAddressPool `object`: Backend Address Pool of an application gateway.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the backend address pool that is unique within an Application Gateway.
  * properties [ApplicationGatewayBackendAddressPoolPropertiesFormat](#applicationgatewaybackendaddresspoolpropertiesformat)
  * type `string`: Type of the resource.
  * id `string`: Resource ID.

### ApplicationGatewayBackendAddressPoolPropertiesFormat
* ApplicationGatewayBackendAddressPoolPropertiesFormat `object`: Properties of Backend Address Pool of an application gateway.
  * backendAddresses `array`: Backend addresses.
    * items [ApplicationGatewayBackendAddress](#applicationgatewaybackendaddress)
  * backendIPConfigurations `array`: Collection of references to IPs defined in network interfaces.
    * items [ApplicationGatewayBackendHealthServer/properties/ipConfiguration](#applicationgatewaybackendhealthserver/properties/ipconfiguration)
  * provisioningState [ApplicationGatewayHttpListenerPropertiesFormat/properties/provisioningState](#applicationgatewayhttplistenerpropertiesformat/properties/provisioningstate)

### ApplicationGatewayBackendHealth
* ApplicationGatewayBackendHealth `object`: Response for ApplicationGatewayBackendHealth API service call.
  * backendAddressPools `array`: A list of ApplicationGatewayBackendHealthPool resources.
    * items [ApplicationGatewayBackendHealthPool](#applicationgatewaybackendhealthpool)

### ApplicationGatewayBackendHealthHttpSettings
* ApplicationGatewayBackendHealthHttpSettings `object`: Application gateway BackendHealthHttp settings.
  * backendHttpSettings [ApplicationGatewayBackendHttpSettings](#applicationgatewaybackendhttpsettings)
  * servers `array`: List of ApplicationGatewayBackendHealthServer resources.
    * items [ApplicationGatewayBackendHealthServer](#applicationgatewaybackendhealthserver)

### ApplicationGatewayBackendHealthOnDemand
* ApplicationGatewayBackendHealthOnDemand `object`: Result of on demand test probe.
  * backendAddressPool [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)
  * backendHealthHttpSettings [ApplicationGatewayBackendHealthHttpSettings](#applicationgatewaybackendhealthhttpsettings)

### ApplicationGatewayBackendHealthPool
* ApplicationGatewayBackendHealthPool `object`: Application gateway BackendHealth pool.
  * backendAddressPool [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)
  * backendHttpSettingsCollection `array`: List of ApplicationGatewayBackendHealthHttpSettings resources.
    * items [ApplicationGatewayBackendHealthHttpSettings](#applicationgatewaybackendhealthhttpsettings)

### ApplicationGatewayBackendHealthServer
* ApplicationGatewayBackendHealthServer `object`: Application gateway backendhealth http settings.
  * address `string`: IP address or FQDN of backend server.
  * health `string` (values: Unknown, Up, Down, Partial, Draining): Health of backend server.
  * healthProbeLog `string`: Health Probe Log.
  * ipConfiguration `object`: IPConfiguration in a network interface.
    * etag `string`: A unique read-only string that changes whenever the resource is updated.
    * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
    * properties `object`: Properties of IP configuration.
      * applicationGatewayBackendAddressPools `array`: The reference of ApplicationGatewayBackendAddressPool resource.
        * items `object`: Backend Address Pool of an application gateway.
          * etag `string`: A unique read-only string that changes whenever the resource is updated.
          * name `string`: Name of the backend address pool that is unique within an Application Gateway.
          * properties `object`: Properties of Backend Address Pool of an application gateway.
          * type `string`: Type of the resource.
          * id `string`: Resource ID.
      * applicationSecurityGroups `array`: Application security groups in which the IP configuration is included.
        * items `object`: An application security group in a resource group.
          * etag `string`: A unique read-only string that changes whenever the resource is updated.
          * properties `object`: Application security group properties.
          * id `string`: Resource ID.
          * location `string`: Resource location.
          * name `string`: Resource name.
          * tags `object`: Resource tags.
          * type `string`: Resource type.
      * loadBalancerBackendAddressPools `array`: The reference of LoadBalancerBackendAddressPool resource.
        * items `object`: Pool of backend IP addresses.
          * etag `string`: A unique read-only string that changes whenever the resource is updated.
          * name `string`: The name of the resource that is unique within the set of backend address pools used by the load balancer. This name can be used to access the resource.
          * properties `object`: Properties of the backend address pool.
          * type `string`: Type of the resource.
          * id `string`: Resource ID.
      * loadBalancerInboundNatRules `array`: A list of references of LoadBalancerInboundNatRules.
        * items `object`: Inbound NAT rule of the load balancer.
          * etag `string`: A unique read-only string that changes whenever the resource is updated.
          * name `string`: The name of the resource that is unique within the set of inbound NAT rules used by the load balancer. This name can be used to access the resource.
          * properties `object`: Properties of the inbound NAT rule.
          * type `string`: Type of the resource.
          * id `string`: Resource ID.
      * primary `boolean`: Whether this is a primary customer address on the network interface.
      * privateIPAddress `string`: Private IP address of the IP configuration.
      * privateIPAddressVersion `string` (values: IPv4, IPv6): IP address version.
      * privateIPAllocationMethod `string` (values: Static, Dynamic): IP address allocation method.
      * privateLinkConnectionProperties `object`: PrivateLinkConnection properties for the network interface.
        * fqdns `array`: List of FQDNs for current private link connection.
          * items `string`
        * groupId `string`: The group ID for current private link connection.
        * requiredMemberName `string`: The required member name for current private link connection.
      * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
      * publicIPAddress `object`: Public IP address resource.
        * etag `string`: A unique read-only string that changes whenever the resource is updated.
        * properties `object`: Public IP address properties.
          * ddosSettings `object`: Contains the DDoS protection settings of the public IP.
          * dnsSettings `object`: Contains FQDN of the DNS record associated with the public IP address.
          * idleTimeoutInMinutes `integer`: The idle timeout of the public IP address.
          * ipAddress `string`: The IP address associated with the public IP address resource.
          * ipConfiguration [ApplicationGatewayBackendHealthServer/properties/ipConfiguration/properties/properties/properties/subnet/properties/properties/properties/ipConfigurations/items](#applicationgatewaybackendhealthserver/properties/ipconfiguration/properties/properties/properties/subnet/properties/properties/properties/ipconfigurations/items)
          * ipTags `array`: The list of tags associated with the public IP address.
          * provisioningState [ApplicationGatewayBackendHealthServer/properties/ipConfiguration/properties/properties/properties/provisioningState](#applicationgatewaybackendhealthserver/properties/ipconfiguration/properties/properties/properties/provisioningstate)
          * publicIPAddressVersion [ApplicationGatewayBackendHealthServer/properties/ipConfiguration/properties/properties/properties/privateIPAddressVersion](#applicationgatewaybackendhealthserver/properties/ipconfiguration/properties/properties/properties/privateipaddressversion)
          * publicIPAllocationMethod [ApplicationGatewayBackendHealthServer/properties/ipConfiguration/properties/properties/properties/privateIPAllocationMethod](#applicationgatewaybackendhealthserver/properties/ipconfiguration/properties/properties/properties/privateipallocationmethod)
          * publicIPPrefix [ApplicationGatewayBackendHealthServer/properties/ipConfiguration/allOf/0](#applicationgatewaybackendhealthserver/properties/ipconfiguration/allof/0)
          * resourceGuid `string`: The resource GUID property of the public IP address resource.
        * sku `object`: SKU of a public IP address.
          * name `string` (values: Basic, Standard): Name of a public IP address SKU.
        * zones `array`: A list of availability zones denoting the IP allocated for the resource needs to come from.
          * items `string`
        * id `string`: Resource ID.
        * location `string`: Resource location.
        * name `string`: Resource name.
        * tags `object`: Resource tags.
        * type `string`: Resource type.
      * subnet `object`: Subnet in a virtual network resource.
        * etag `string`: A unique read-only string that changes whenever the resource is updated.
        * name `string`: The name of the resource that is unique within a resource group. This name can be used to access the resource.
        * properties `object`: Properties of the subnet.
          * addressPrefix `string`: The address prefix for the subnet.
          * addressPrefixes `array`: List of address prefixes for the subnet.
          * delegations `array`: An array of references to the delegations on the subnet.
          * ipConfigurationProfiles `array`: Array of IP configuration profiles which reference this subnet.
          * ipConfigurations `array`: An array of references to the network interface IP configurations using subnet.
          * natGateway [ApplicationGatewayBackendHealthServer/properties/ipConfiguration/allOf/0](#applicationgatewaybackendhealthserver/properties/ipconfiguration/allof/0)
          * networkSecurityGroup `object`: NetworkSecurityGroup resource.
          * privateEndpointNetworkPolicies `string`: Enable or Disable apply network policies on private end point in the subnet.
          * privateEndpoints `array`: An array of references to private endpoints.
          * privateLinkServiceNetworkPolicies `string`: Enable or Disable apply network policies on private link service in the subnet.
          * provisioningState [ApplicationGatewayBackendHealthServer/properties/ipConfiguration/properties/properties/properties/provisioningState](#applicationgatewaybackendhealthserver/properties/ipconfiguration/properties/properties/properties/provisioningstate)
          * purpose `string`: A read-only string identifying the intention of use for this subnet based on delegations and other user-defined properties.
          * resourceNavigationLinks `array`: An array of references to the external resources using subnet.
          * routeTable `object`: Route table resource.
          * serviceAssociationLinks `array`: An array of references to services injecting into this subnet.
          * serviceEndpointPolicies `array`: An array of service endpoint policies.
          * serviceEndpoints `array`: An array of service endpoints.
        * id `string`: Resource ID.
      * virtualNetworkTaps `array`: The reference to Virtual Network Taps.
        * items `object`: Virtual Network Tap resource.
          * etag `string`: A unique read-only string that changes whenever the resource is updated.
          * properties `object`: Virtual Network Tap properties.
          * id `string`: Resource ID.
          * location `string`: Resource location.
          * name `string`: Resource name.
          * tags `object`: Resource tags.
          * type `string`: Resource type.
    * id `string`: Resource ID.

### ApplicationGatewayBackendHttpSettings
* ApplicationGatewayBackendHttpSettings `object`: Backend address pool settings of an application gateway.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the backend http settings that is unique within an Application Gateway.
  * properties [ApplicationGatewayBackendHttpSettingsPropertiesFormat](#applicationgatewaybackendhttpsettingspropertiesformat)
  * type `string`: Type of the resource.
  * id `string`: Resource ID.

### ApplicationGatewayBackendHttpSettingsPropertiesFormat
* ApplicationGatewayBackendHttpSettingsPropertiesFormat `object`: Properties of Backend address pool settings of an application gateway.
  * affinityCookieName `string`: Cookie name to use for the affinity cookie.
  * authenticationCertificates `array`: Array of references to application gateway authentication certificates.
    * items [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)
  * connectionDraining [ApplicationGatewayConnectionDraining](#applicationgatewayconnectiondraining)
  * cookieBasedAffinity `string` (values: Enabled, Disabled): Cookie based affinity.
  * hostName `string`: Host header to be sent to the backend servers.
  * path `string`: Path which should be used as a prefix for all HTTP requests. Null means no path will be prefixed. Default value is null.
  * pickHostNameFromBackendAddress `boolean`: Whether to pick host header should be picked from the host name of the backend server. Default value is false.
  * port `integer`: The destination port on the backend.
  * probe [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)
  * probeEnabled `boolean`: Whether the probe is enabled. Default value is false.
  * protocol [ApplicationGatewayProtocol](#applicationgatewayprotocol)
  * provisioningState [ApplicationGatewayHttpListenerPropertiesFormat/properties/provisioningState](#applicationgatewayhttplistenerpropertiesformat/properties/provisioningstate)
  * requestTimeout `integer`: Request timeout in seconds. Application Gateway will fail the request if response is not received within RequestTimeout. Acceptable values are from 1 second to 86400 seconds.
  * trustedRootCertificates `array`: Array of references to application gateway trusted root certificates.
    * items [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)

### ApplicationGatewayConnectionDraining
* ApplicationGatewayConnectionDraining `object`: Connection draining allows open connections to a backend server to be active for a specified time after the backend server got removed from the configuration.
  * drainTimeoutInSec **required** `integer`: The number of seconds connection draining is active. Acceptable values are from 1 second to 3600 seconds.
  * enabled **required** `boolean`: Whether connection draining is enabled or not.

### ApplicationGatewayCustomError
* ApplicationGatewayCustomError `object`: Customer error of an application gateway.
  * customErrorPageUrl `string`: Error page URL of the application gateway customer error.
  * statusCode `string` (values: HttpStatus403, HttpStatus502): Status code of the application gateway customer error.

### ApplicationGatewayFirewallDisabledRuleGroup
* ApplicationGatewayFirewallDisabledRuleGroup `object`: Allows to disable rules within a rule group or an entire rule group.
  * ruleGroupName **required** `string`: The name of the rule group that will be disabled.
  * rules `array`: The list of rules that will be disabled. If null, all rules of the rule group will be disabled.
    * items `integer`

### ApplicationGatewayFirewallExclusion
* ApplicationGatewayFirewallExclusion `object`: Allow to exclude some variable satisfy the condition for the WAF check.
  * matchVariable **required** `string`: The variable to be excluded.
  * selector **required** `string`: When matchVariable is a collection, operator used to specify which elements in the collection this exclusion applies to.
  * selectorMatchOperator **required** `string`: When matchVariable is a collection, operate on the selector to specify which elements in the collection this exclusion applies to.

### ApplicationGatewayFirewallRule
* ApplicationGatewayFirewallRule `object`: A web application firewall rule.
  * description `string`: The description of the web application firewall rule.
  * ruleId **required** `integer`: The identifier of the web application firewall rule.

### ApplicationGatewayFirewallRuleGroup
* ApplicationGatewayFirewallRuleGroup `object`: A web application firewall rule group.
  * description `string`: The description of the web application firewall rule group.
  * ruleGroupName **required** `string`: The name of the web application firewall rule group.
  * rules **required** `array`: The rules of the web application firewall rule group.
    * items [ApplicationGatewayFirewallRule](#applicationgatewayfirewallrule)

### ApplicationGatewayFirewallRuleSet
* ApplicationGatewayFirewallRuleSet `object`: A web application firewall rule set.
  * properties [ApplicationGatewayFirewallRuleSetPropertiesFormat](#applicationgatewayfirewallrulesetpropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ApplicationGatewayFirewallRuleSetPropertiesFormat
* ApplicationGatewayFirewallRuleSetPropertiesFormat `object`: Properties of the web application firewall rule set.
  * provisioningState [ApplicationGatewayHttpListenerPropertiesFormat/properties/provisioningState](#applicationgatewayhttplistenerpropertiesformat/properties/provisioningstate)
  * ruleGroups **required** `array`: The rule groups of the web application firewall rule set.
    * items [ApplicationGatewayFirewallRuleGroup](#applicationgatewayfirewallrulegroup)
  * ruleSetType **required** `string`: The type of the web application firewall rule set.
  * ruleSetVersion **required** `string`: The version of the web application firewall rule set type.

### ApplicationGatewayFrontendIPConfiguration
* ApplicationGatewayFrontendIPConfiguration `object`: Frontend IP configuration of an application gateway.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the frontend IP configuration that is unique within an Application Gateway.
  * properties [ApplicationGatewayFrontendIPConfigurationPropertiesFormat](#applicationgatewayfrontendipconfigurationpropertiesformat)
  * type `string`: Type of the resource.
  * id `string`: Resource ID.

### ApplicationGatewayFrontendIPConfigurationPropertiesFormat
* ApplicationGatewayFrontendIPConfigurationPropertiesFormat `object`: Properties of Frontend IP configuration of an application gateway.
  * privateIPAddress `string`: PrivateIPAddress of the network interface IP Configuration.
  * privateIPAllocationMethod `string` (values: Static, Dynamic): IP address allocation method.
  * provisioningState [ApplicationGatewayHttpListenerPropertiesFormat/properties/provisioningState](#applicationgatewayhttplistenerpropertiesformat/properties/provisioningstate)
  * publicIPAddress [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)
  * subnet [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)

### ApplicationGatewayFrontendPort
* ApplicationGatewayFrontendPort `object`: Frontend port of an application gateway.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the frontend port that is unique within an Application Gateway.
  * properties [ApplicationGatewayFrontendPortPropertiesFormat](#applicationgatewayfrontendportpropertiesformat)
  * type `string`: Type of the resource.
  * id `string`: Resource ID.

### ApplicationGatewayFrontendPortPropertiesFormat
* ApplicationGatewayFrontendPortPropertiesFormat `object`: Properties of Frontend port of an application gateway.
  * port `integer`: Frontend port.
  * provisioningState [ApplicationGatewayHttpListenerPropertiesFormat/properties/provisioningState](#applicationgatewayhttplistenerpropertiesformat/properties/provisioningstate)

### ApplicationGatewayHeaderConfiguration
* ApplicationGatewayHeaderConfiguration `object`: Header configuration of the Actions set in Application Gateway.
  * headerName `string`: Header name of the header configuration.
  * headerValue `string`: Header value of the header configuration.

### ApplicationGatewayHttpListener
* ApplicationGatewayHttpListener `object`: Http listener of an application gateway.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the HTTP listener that is unique within an Application Gateway.
  * properties [ApplicationGatewayHttpListenerPropertiesFormat](#applicationgatewayhttplistenerpropertiesformat)
  * type `string`: Type of the resource.
  * id `string`: Resource ID.

### ApplicationGatewayHttpListenerPropertiesFormat
* ApplicationGatewayHttpListenerPropertiesFormat `object`: Properties of HTTP listener of an application gateway.
  * customErrorConfigurations `array`: Custom error configurations of the HTTP listener.
    * items [ApplicationGatewayCustomError](#applicationgatewaycustomerror)
  * frontendIPConfiguration [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)
  * frontendPort [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)
  * hostName `string`: Host name of HTTP listener.
  * protocol [ApplicationGatewayProtocol](#applicationgatewayprotocol)
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * requireServerNameIndication `boolean`: Applicable only if protocol is https. Enables SNI for multi-hosting.
  * sslCertificate [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)

### ApplicationGatewayIPConfiguration
* ApplicationGatewayIPConfiguration `object`: IP configuration of an application gateway. Currently 1 public and 1 private IP configuration is allowed.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the IP configuration that is unique within an Application Gateway.
  * properties [ApplicationGatewayIPConfigurationPropertiesFormat](#applicationgatewayipconfigurationpropertiesformat)
  * type `string`: Type of the resource.
  * id `string`: Resource ID.

### ApplicationGatewayIPConfigurationPropertiesFormat
* ApplicationGatewayIPConfigurationPropertiesFormat `object`: Properties of IP configuration of an application gateway.
  * provisioningState [ApplicationGatewayHttpListenerPropertiesFormat/properties/provisioningState](#applicationgatewayhttplistenerpropertiesformat/properties/provisioningstate)
  * subnet [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)

### ApplicationGatewayListResult
* ApplicationGatewayListResult `object`: Response for ListApplicationGateways API service call.
  * nextLink `string`: URL to get the next set of results.
  * value `array`: List of an application gateways in a resource group.
    * items [ApplicationGateway](#applicationgateway)

### ApplicationGatewayOnDemandProbe
* ApplicationGatewayOnDemandProbe `object`: Details of on demand test probe request.
  * backendAddressPool [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)
  * backendHttpSettings [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)
  * host `string`: Host name to send the probe to.
  * match [ApplicationGatewayProbeHealthResponseMatch](#applicationgatewayprobehealthresponsematch)
  * path `string`: Relative path of probe. Valid path starts from '/'. Probe is sent to <Protocol>://<host>:<port><path>.
  * pickHostNameFromBackendHttpSettings `boolean`: Whether the host header should be picked from the backend http settings. Default value is false.
  * protocol [ApplicationGatewayProtocol](#applicationgatewayprotocol)
  * timeout `integer`: The probe timeout in seconds. Probe marked as failed if valid response is not received with this timeout period. Acceptable values are from 1 second to 86400 seconds.

### ApplicationGatewayPathRule
* ApplicationGatewayPathRule `object`: Path rule of URL path map of an application gateway.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the path rule that is unique within an Application Gateway.
  * properties [ApplicationGatewayPathRulePropertiesFormat](#applicationgatewaypathrulepropertiesformat)
  * type `string`: Type of the resource.
  * id `string`: Resource ID.

### ApplicationGatewayPathRulePropertiesFormat
* ApplicationGatewayPathRulePropertiesFormat `object`: Properties of path rule of an application gateway.
  * backendAddressPool [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)
  * backendHttpSettings [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)
  * paths `array`: Path rules of URL path map.
    * items `string`
  * provisioningState [ApplicationGatewayHttpListenerPropertiesFormat/properties/provisioningState](#applicationgatewayhttplistenerpropertiesformat/properties/provisioningstate)
  * redirectConfiguration [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)
  * rewriteRuleSet `object`: Reference to another subresource.
    * id `string`: Resource ID.

### ApplicationGatewayProbe
* ApplicationGatewayProbe `object`: Probe of the application gateway.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the probe that is unique within an Application Gateway.
  * properties [ApplicationGatewayProbePropertiesFormat](#applicationgatewayprobepropertiesformat)
  * type `string`: Type of the resource.
  * id `string`: Resource ID.

### ApplicationGatewayProbeHealthResponseMatch
* ApplicationGatewayProbeHealthResponseMatch `object`: Application gateway probe health response match.
  * body `string`: Body that must be contained in the health response. Default value is empty.
  * statusCodes `array`: Allowed ranges of healthy status codes. Default range of healthy status codes is 200-399.
    * items `string`

### ApplicationGatewayProbePropertiesFormat
* ApplicationGatewayProbePropertiesFormat `object`: Properties of probe of an application gateway.
  * host `string`: Host name to send the probe to.
  * interval `integer`: The probing interval in seconds. This is the time interval between two consecutive probes. Acceptable values are from 1 second to 86400 seconds.
  * match [ApplicationGatewayProbeHealthResponseMatch](#applicationgatewayprobehealthresponsematch)
  * minServers `integer`: Minimum number of servers that are always marked healthy. Default value is 0.
  * path `string`: Relative path of probe. Valid path starts from '/'. Probe is sent to <Protocol>://<host>:<port><path>.
  * pickHostNameFromBackendHttpSettings `boolean`: Whether the host header should be picked from the backend http settings. Default value is false.
  * port `integer`: Custom port which will be used for probing the backend servers. The valid value ranges from 1 to 65535. In case not set, port from http settings will be used. This property is valid for Standard_v2 and WAF_v2 only.
  * protocol [ApplicationGatewayProtocol](#applicationgatewayprotocol)
  * provisioningState [ApplicationGatewayHttpListenerPropertiesFormat/properties/provisioningState](#applicationgatewayhttplistenerpropertiesformat/properties/provisioningstate)
  * timeout `integer`: The probe timeout in seconds. Probe marked as failed if valid response is not received with this timeout period. Acceptable values are from 1 second to 86400 seconds.
  * unhealthyThreshold `integer`: The probe retry count. Backend server is marked down after consecutive probe failure count reaches UnhealthyThreshold. Acceptable values are from 1 second to 20.

### ApplicationGatewayPropertiesFormat
* ApplicationGatewayPropertiesFormat `object`: Properties of the application gateway.
  * authenticationCertificates `array`: Authentication certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
    * items [ApplicationGatewayAuthenticationCertificate](#applicationgatewayauthenticationcertificate)
  * autoscaleConfiguration [ApplicationGatewayAutoscaleConfiguration](#applicationgatewayautoscaleconfiguration)
  * backendAddressPools `array`: Backend address pool of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
    * items [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)
  * backendHttpSettingsCollection `array`: Backend http settings of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
    * items [ApplicationGatewayBackendHttpSettings](#applicationgatewaybackendhttpsettings)
  * customErrorConfigurations `array`: Custom error configurations of the application gateway resource.
    * items [ApplicationGatewayCustomError](#applicationgatewaycustomerror)
  * enableFips `boolean`: Whether FIPS is enabled on the application gateway resource.
  * enableHttp2 `boolean`: Whether HTTP2 is enabled on the application gateway resource.
  * firewallPolicy [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)
  * frontendIPConfigurations `array`: Frontend IP addresses of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
    * items [ApplicationGatewayFrontendIPConfiguration](#applicationgatewayfrontendipconfiguration)
  * frontendPorts `array`: Frontend ports of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
    * items [ApplicationGatewayFrontendPort](#applicationgatewayfrontendport)
  * gatewayIPConfigurations `array`: Subnets of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
    * items [ApplicationGatewayIPConfiguration](#applicationgatewayipconfiguration)
  * httpListeners `array`: Http listeners of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
    * items [ApplicationGatewayHttpListener](#applicationgatewayhttplistener)
  * operationalState `string` (values: Stopped, Starting, Running, Stopping): Operational state of the application gateway resource.
  * probes `array`: Probes of the application gateway resource.
    * items [ApplicationGatewayProbe](#applicationgatewayprobe)
  * provisioningState [ApplicationGatewayHttpListenerPropertiesFormat/properties/provisioningState](#applicationgatewayhttplistenerpropertiesformat/properties/provisioningstate)
  * redirectConfigurations `array`: Redirect configurations of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
    * items [ApplicationGatewayRedirectConfiguration](#applicationgatewayredirectconfiguration)
  * requestRoutingRules `array`: Request routing rules of the application gateway resource.
    * items [ApplicationGatewayRequestRoutingRule](#applicationgatewayrequestroutingrule)
  * resourceGuid `string`: The resource GUID property of the application gateway resource.
  * rewriteRuleSets `array`: Rewrite rules for the application gateway resource.
    * items [ApplicationGatewayRewriteRuleSet](#applicationgatewayrewriteruleset)
  * sku [ApplicationGatewaySku](#applicationgatewaysku)
  * sslCertificates `array`: SSL certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
    * items [ApplicationGatewaySslCertificate](#applicationgatewaysslcertificate)
  * sslPolicy [ApplicationGatewaySslPolicy](#applicationgatewaysslpolicy)
  * trustedRootCertificates `array`: Trusted Root certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
    * items [ApplicationGatewayTrustedRootCertificate](#applicationgatewaytrustedrootcertificate)
  * urlPathMaps `array`: URL path map of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
    * items [ApplicationGatewayUrlPathMap](#applicationgatewayurlpathmap)
  * webApplicationFirewallConfiguration [ApplicationGatewayWebApplicationFirewallConfiguration](#applicationgatewaywebapplicationfirewallconfiguration)

### ApplicationGatewayProtocol
* ApplicationGatewayProtocol `string` (values: Http, Https): Application Gateway protocol.

### ApplicationGatewayRedirectConfiguration
* ApplicationGatewayRedirectConfiguration `object`: Redirect configuration of an application gateway.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the redirect configuration that is unique within an Application Gateway.
  * properties [ApplicationGatewayRedirectConfigurationPropertiesFormat](#applicationgatewayredirectconfigurationpropertiesformat)
  * type `string`: Type of the resource.
  * id `string`: Resource ID.

### ApplicationGatewayRedirectConfigurationPropertiesFormat
* ApplicationGatewayRedirectConfigurationPropertiesFormat `object`: Properties of redirect configuration of the application gateway.
  * includePath `boolean`: Include path in the redirected url.
  * includeQueryString `boolean`: Include query string in the redirected url.
  * pathRules `array`: Path rules specifying redirect configuration.
    * items [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)
  * redirectType [RedirectTypeEnum](#redirecttypeenum)
  * requestRoutingRules `array`: Request routing specifying redirect configuration.
    * items [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)
  * targetListener [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)
  * targetUrl `string`: Url to redirect the request to.
  * urlPathMaps `array`: Url path maps specifying default redirect configuration.
    * items [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)

### ApplicationGatewayRequestRoutingRule
* ApplicationGatewayRequestRoutingRule `object`: Request routing rule of an application gateway.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the request routing rule that is unique within an Application Gateway.
  * properties [ApplicationGatewayRequestRoutingRulePropertiesFormat](#applicationgatewayrequestroutingrulepropertiesformat)
  * type `string`: Type of the resource.
  * id `string`: Resource ID.

### ApplicationGatewayRequestRoutingRulePropertiesFormat
* ApplicationGatewayRequestRoutingRulePropertiesFormat `object`: Properties of request routing rule of the application gateway.
  * backendAddressPool [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)
  * backendHttpSettings [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)
  * httpListener [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)
  * priority `integer`: Priority of the request routing rule.
  * provisioningState [ApplicationGatewayHttpListenerPropertiesFormat/properties/provisioningState](#applicationgatewayhttplistenerpropertiesformat/properties/provisioningstate)
  * redirectConfiguration [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)
  * rewriteRuleSet [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)
  * ruleType `string` (values: Basic, PathBasedRouting): Rule type.
  * urlPathMap [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)

### ApplicationGatewayRewriteRule
* ApplicationGatewayRewriteRule `object`: Rewrite rule of an application gateway.
  * actionSet [ApplicationGatewayRewriteRuleActionSet](#applicationgatewayrewriteruleactionset)
  * conditions `array`: Conditions based on which the action set execution will be evaluated.
    * items [ApplicationGatewayRewriteRuleCondition](#applicationgatewayrewriterulecondition)
  * name `string`: Name of the rewrite rule that is unique within an Application Gateway.
  * ruleSequence `integer`: Rule Sequence of the rewrite rule that determines the order of execution of a particular rule in a RewriteRuleSet.

### ApplicationGatewayRewriteRuleActionSet
* ApplicationGatewayRewriteRuleActionSet `object`: Set of actions in the Rewrite Rule in Application Gateway.
  * requestHeaderConfigurations `array`: Request Header Actions in the Action Set.
    * items [ApplicationGatewayHeaderConfiguration](#applicationgatewayheaderconfiguration)
  * responseHeaderConfigurations `array`: Response Header Actions in the Action Set.
    * items [ApplicationGatewayHeaderConfiguration](#applicationgatewayheaderconfiguration)

### ApplicationGatewayRewriteRuleCondition
* ApplicationGatewayRewriteRuleCondition `object`: Set of conditions in the Rewrite Rule in Application Gateway.
  * ignoreCase `boolean`: Setting this paramter to truth value with force the pattern to do a case in-sensitive comparison.
  * negate `boolean`: Setting this value as truth will force to check the negation of the condition given by the user.
  * pattern `string`: The pattern, either fixed string or regular expression, that evaluates the truthfulness of the condition.
  * variable `string`: The condition parameter of the RewriteRuleCondition.

### ApplicationGatewayRewriteRuleSet
* ApplicationGatewayRewriteRuleSet `object`: Rewrite rule set of an application gateway.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the rewrite rule set that is unique within an Application Gateway.
  * properties [ApplicationGatewayRewriteRuleSetPropertiesFormat](#applicationgatewayrewriterulesetpropertiesformat)
  * id `string`: Resource ID.

### ApplicationGatewayRewriteRuleSetPropertiesFormat
* ApplicationGatewayRewriteRuleSetPropertiesFormat `object`: Properties of rewrite rule set of the application gateway.
  * provisioningState [ApplicationGatewayHttpListenerPropertiesFormat/properties/provisioningState](#applicationgatewayhttplistenerpropertiesformat/properties/provisioningstate)
  * rewriteRules `array`: Rewrite rules in the rewrite rule set.
    * items [ApplicationGatewayRewriteRule](#applicationgatewayrewriterule)

### ApplicationGatewaySku
* ApplicationGatewaySku `object`: SKU of an application gateway.
  * capacity `integer`: Capacity (instance count) of an application gateway.
  * name `string` (values: Standard_Small, Standard_Medium, Standard_Large, WAF_Medium, WAF_Large, Standard_v2, WAF_v2): Name of an application gateway SKU.
  * tier `string` (values: Standard, WAF, Standard_v2, WAF_v2): Tier of an application gateway.

### ApplicationGatewaySslCertificate
* ApplicationGatewaySslCertificate `object`: SSL certificates of an application gateway.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the SSL certificate that is unique within an Application Gateway.
  * properties [ApplicationGatewaySslCertificatePropertiesFormat](#applicationgatewaysslcertificatepropertiesformat)
  * type `string`: Type of the resource.
  * id `string`: Resource ID.

### ApplicationGatewaySslCertificatePropertiesFormat
* ApplicationGatewaySslCertificatePropertiesFormat `object`: Properties of SSL certificates of an application gateway.
  * data `string`: Base-64 encoded pfx certificate. Only applicable in PUT Request.
  * keyVaultSecretId `string`: Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
  * password `string`: Password for the pfx file specified in data. Only applicable in PUT request.
  * provisioningState [ApplicationGatewayHttpListenerPropertiesFormat/properties/provisioningState](#applicationgatewayhttplistenerpropertiesformat/properties/provisioningstate)
  * publicCertData `string`: Base-64 encoded Public cert data corresponding to pfx specified in data. Only applicable in GET request.

### ApplicationGatewaySslPolicy
* ApplicationGatewaySslPolicy `object`: Application Gateway Ssl policy.
  * cipherSuites `array`: Ssl cipher suites to be enabled in the specified order to application gateway.
    * items [CipherSuitesEnum](#ciphersuitesenum)
  * disabledSslProtocols `array`: Ssl protocols to be disabled on application gateway.
    * items [ProtocolsEnum](#protocolsenum)
  * minProtocolVersion [ProtocolsEnum](#protocolsenum)
  * policyName [PolicyNameEnum](#policynameenum)
  * policyType `string` (values: Predefined, Custom): Type of Ssl Policy.

### ApplicationGatewaySslPredefinedPolicy
* ApplicationGatewaySslPredefinedPolicy `object`: An Ssl predefined policy.
  * name `string`: Name of the Ssl predefined policy.
  * properties [ApplicationGatewaySslPredefinedPolicyPropertiesFormat](#applicationgatewaysslpredefinedpolicypropertiesformat)
  * id `string`: Resource ID.

### ApplicationGatewaySslPredefinedPolicyPropertiesFormat
* ApplicationGatewaySslPredefinedPolicyPropertiesFormat `object`: Properties of ApplicationGatewaySslPredefinedPolicy.
  * cipherSuites `array`: Ssl cipher suites to be enabled in the specified order for application gateway.
    * items [CipherSuitesEnum](#ciphersuitesenum)
  * minProtocolVersion [ProtocolsEnum](#protocolsenum)

### ApplicationGatewayTrustedRootCertificate
* ApplicationGatewayTrustedRootCertificate `object`: Trusted Root certificates of an application gateway.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the trusted root certificate that is unique within an Application Gateway.
  * properties [ApplicationGatewayTrustedRootCertificatePropertiesFormat](#applicationgatewaytrustedrootcertificatepropertiesformat)
  * type `string`: Type of the resource.
  * id `string`: Resource ID.

### ApplicationGatewayTrustedRootCertificatePropertiesFormat
* ApplicationGatewayTrustedRootCertificatePropertiesFormat `object`: Trusted Root certificates properties of an application gateway.
  * data `string`: Certificate public data.
  * keyVaultSecretId `string`: Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
  * provisioningState [ApplicationGatewayHttpListenerPropertiesFormat/properties/provisioningState](#applicationgatewayhttplistenerpropertiesformat/properties/provisioningstate)

### ApplicationGatewayUrlPathMap
* ApplicationGatewayUrlPathMap `object`: UrlPathMaps give a url path to the backend mapping information for PathBasedRouting.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the URL path map that is unique within an Application Gateway.
  * properties [ApplicationGatewayUrlPathMapPropertiesFormat](#applicationgatewayurlpathmappropertiesformat)
  * type `string`: Type of the resource.
  * id `string`: Resource ID.

### ApplicationGatewayUrlPathMapPropertiesFormat
* ApplicationGatewayUrlPathMapPropertiesFormat `object`: Properties of UrlPathMap of the application gateway.
  * defaultBackendAddressPool [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)
  * defaultBackendHttpSettings [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)
  * defaultRedirectConfiguration [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)
  * defaultRewriteRuleSet [ApplicationGatewayPathRulePropertiesFormat/properties/rewriteRuleSet](#applicationgatewaypathrulepropertiesformat/properties/rewriteruleset)
  * pathRules `array`: Path rule of URL path map resource.
    * items [ApplicationGatewayPathRule](#applicationgatewaypathrule)
  * provisioningState [ApplicationGatewayHttpListenerPropertiesFormat/properties/provisioningState](#applicationgatewayhttplistenerpropertiesformat/properties/provisioningstate)

### ApplicationGatewayWebApplicationFirewallConfiguration
* ApplicationGatewayWebApplicationFirewallConfiguration `object`: Application gateway web application firewall configuration.
  * disabledRuleGroups `array`: The disabled rule groups.
    * items [ApplicationGatewayFirewallDisabledRuleGroup](#applicationgatewayfirewalldisabledrulegroup)
  * enabled **required** `boolean`: Whether the web application firewall is enabled or not.
  * exclusions `array`: The exclusion list.
    * items [ApplicationGatewayFirewallExclusion](#applicationgatewayfirewallexclusion)
  * fileUploadLimitInMb `integer`: Maximum file upload size in Mb for WAF.
  * firewallMode **required** `string` (values: Detection, Prevention): Web application firewall mode.
  * maxRequestBodySize `integer`: Maximum request body size for WAF.
  * maxRequestBodySizeInKb `integer`: Maximum request body size in Kb for WAF.
  * requestBodyCheck `boolean`: Whether allow WAF to check request Body.
  * ruleSetType **required** `string`: The type of the web application firewall rule set. Possible values are: 'OWASP'.
  * ruleSetVersion **required** `string`: The version of the rule set type.

### CipherSuitesEnum
* CipherSuitesEnum `string` (values: TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384, TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256, TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA, TLS_DHE_RSA_WITH_AES_256_GCM_SHA384, TLS_DHE_RSA_WITH_AES_128_GCM_SHA256, TLS_DHE_RSA_WITH_AES_256_CBC_SHA, TLS_DHE_RSA_WITH_AES_128_CBC_SHA, TLS_RSA_WITH_AES_256_GCM_SHA384, TLS_RSA_WITH_AES_128_GCM_SHA256, TLS_RSA_WITH_AES_256_CBC_SHA256, TLS_RSA_WITH_AES_128_CBC_SHA256, TLS_RSA_WITH_AES_256_CBC_SHA, TLS_RSA_WITH_AES_128_CBC_SHA, TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384, TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256, TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384, TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256, TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA, TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA, TLS_DHE_DSS_WITH_AES_256_CBC_SHA256, TLS_DHE_DSS_WITH_AES_128_CBC_SHA256, TLS_DHE_DSS_WITH_AES_256_CBC_SHA, TLS_DHE_DSS_WITH_AES_128_CBC_SHA, TLS_RSA_WITH_3DES_EDE_CBC_SHA, TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256, TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384): Ssl cipher suites enums.

### PolicyNameEnum
* PolicyNameEnum `string` (values: AppGwSslPolicy20150501, AppGwSslPolicy20170401, AppGwSslPolicy20170401S): Ssl predefined policy name enums.

### ProtocolsEnum
* ProtocolsEnum `string` (values: TLSv1_0, TLSv1_1, TLSv1_2): Ssl protocol enums.

### RedirectTypeEnum
* RedirectTypeEnum `string` (values: Permanent, Found, SeeOther, Temporary): Redirect type enum.


