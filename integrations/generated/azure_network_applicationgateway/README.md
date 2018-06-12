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

azure_network_applicationgateway.ApplicationGateways_ListAvailableWafRuleSets({
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Microsoft Azure Network management API provides a RESTful set of web services that interact with Microsoft Azure Networks service to manage your network resources. The API has entities that capture the relationship between an end user and the Microsoft Azure Networks service.

## Actions

### ApplicationGateways_ListAvailableWafRuleSets
Lists all available web application firewall rule sets.


```js
azure_network_applicationgateway.ApplicationGateways_ListAvailableWafRuleSets({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ApplicationGatewayAvailableWafRuleSetsResult](#applicationgatewayavailablewafrulesetsresult)

### ApplicationGateways_ListAll
Gets all the application gateways in a subscription.


```js
azure_network_applicationgateway.ApplicationGateways_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ApplicationGatewayListResult](#applicationgatewaylistresult)

### ApplicationGateways_List
Lists all application gateways in a resource group.


```js
azure_network_applicationgateway.ApplicationGateways_List({
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
* output [ApplicationGatewayListResult](#applicationgatewaylistresult)

### ApplicationGateways_Delete
Deletes the specified application gateway.


```js
azure_network_applicationgateway.ApplicationGateways_Delete({
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

#### Output
*Output schema unknown*

### ApplicationGateways_Get
Gets the specified application gateway.


```js
azure_network_applicationgateway.ApplicationGateways_Get({
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

#### Output
* output [ApplicationGateway](#applicationgateway)

### ApplicationGateways_CreateOrUpdate
Creates or updates the specified application gateway.


```js
azure_network_applicationgateway.ApplicationGateways_CreateOrUpdate({
  "resourceGroupName": "",
  "applicationGatewayName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * applicationGatewayName **required** `string`: The name of the application gateway.
  * parameters **required** [ApplicationGateway](#applicationgateway)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

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

### ApplicationGateways_Start
Starts the specified application gateway.


```js
azure_network_applicationgateway.ApplicationGateways_Start({
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

#### Output
*Output schema unknown*

### ApplicationGateways_Stop
Stops the specified application gateway in a resource group.


```js
azure_network_applicationgateway.ApplicationGateways_Stop({
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

#### Output
*Output schema unknown*



## Definitions

### ApplicationGateway
* ApplicationGateway `object`: Application gateway resource
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [ApplicationGatewayPropertiesFormat](#applicationgatewaypropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ApplicationGatewayAuthenticationCertificate
* ApplicationGatewayAuthenticationCertificate `object`: Authentication certificates of an application gateway.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [ApplicationGatewayAuthenticationCertificatePropertiesFormat](#applicationgatewayauthenticationcertificatepropertiesformat)
  * id `string`: Resource ID.

### ApplicationGatewayAuthenticationCertificatePropertiesFormat
* ApplicationGatewayAuthenticationCertificatePropertiesFormat `object`: Authentication certificates properties of an application gateway.
  * data `string`: Certificate public data.
  * provisioningState `string`: Provisioning state of the authentication certificate resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

### ApplicationGatewayAvailableWafRuleSetsResult
* ApplicationGatewayAvailableWafRuleSetsResult `object`: Response for ApplicationGatewayAvailableWafRuleSets API service call.
  * value `array`: The list of application gateway rule sets.
    * items [ApplicationGatewayFirewallRuleSet](#applicationgatewayfirewallruleset)

### ApplicationGatewayBackendAddress
* ApplicationGatewayBackendAddress `object`: Backend address of an application gateway.
  * fqdn `string`: Fully qualified domain name (FQDN).
  * ipAddress `string`: IP address

### ApplicationGatewayBackendAddressPool
* ApplicationGatewayBackendAddressPool `object`: Backend Address Pool of an application gateway.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Resource that is unique within a resource group. This name can be used to access the resource.
  * properties [ApplicationGatewayBackendAddressPoolPropertiesFormat](#applicationgatewaybackendaddresspoolpropertiesformat)
  * id `string`: Resource ID.

### ApplicationGatewayBackendAddressPoolPropertiesFormat
* ApplicationGatewayBackendAddressPoolPropertiesFormat `object`: Properties of Backend Address Pool of an application gateway.
  * backendAddresses `array`: Backend addresses
    * items `object`: Backend address of an application gateway.
      * fqdn `string`: Fully qualified domain name (FQDN).
      * ipAddress `string`: IP address
  * backendIPConfigurations `array`: Collection of references to IPs defined in network interfaces.
    * items [./networkInterface.jsonNetworkInterfaceIPConfiguration](#./networkinterface.jsonnetworkinterfaceipconfiguration)
  * provisioningState `string`: Provisioning state of the backend address pool resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

### ApplicationGatewayBackendHealth
* ApplicationGatewayBackendHealth `object`: List of ApplicationGatewayBackendHealthPool resources.
  * backendAddressPools `array`
    * items [ApplicationGatewayBackendHealthPool](#applicationgatewaybackendhealthpool)

### ApplicationGatewayBackendHealthHttpSettings
* ApplicationGatewayBackendHealthHttpSettings `object`: Application gateway BackendHealthHttp settings.
  * backendHttpSettings [ApplicationGatewayBackendHttpSettings](#applicationgatewaybackendhttpsettings)
  * servers `array`: List of ApplicationGatewayBackendHealthServer resources.
    * items [ApplicationGatewayBackendHealthServer](#applicationgatewaybackendhealthserver)

### ApplicationGatewayBackendHealthPool
* ApplicationGatewayBackendHealthPool `object`: Application gateway BackendHealth pool.
  * backendAddressPool [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)
  * backendHttpSettingsCollection `array`: List of ApplicationGatewayBackendHealthHttpSettings resources.
    * items [ApplicationGatewayBackendHealthHttpSettings](#applicationgatewaybackendhealthhttpsettings)

### ApplicationGatewayBackendHealthServer
* ApplicationGatewayBackendHealthServer `object`: Application gateway backendhealth http settings.
  * address `string`: IP address or FQDN of backend server.
  * health `string` (values: Unknown, Up, Down, Partial, Draining): Health of backend server.
  * ipConfiguration `object`
    * id `string`: Resource ID.

### ApplicationGatewayBackendHttpSettings
* ApplicationGatewayBackendHttpSettings `object`: Backend address pool settings of an application gateway.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [ApplicationGatewayBackendHttpSettingsPropertiesFormat](#applicationgatewaybackendhttpsettingspropertiesformat)
  * id `string`: Resource ID.

### ApplicationGatewayBackendHttpSettingsPropertiesFormat
* ApplicationGatewayBackendHttpSettingsPropertiesFormat `object`: Properties of Backend address pool settings of an application gateway.
  * authenticationCertificates `array`: Array of references to application gateway authentication certificates.
    * items `object`
      * id `string`: Resource ID.
  * connectionDraining [ApplicationGatewayConnectionDraining](#applicationgatewayconnectiondraining)
  * cookieBasedAffinity `string` (values: Enabled, Disabled): Cookie based affinity.
  * port `integer`: Port
  * probe `object`
    * id `string`: Resource ID.
  * protocol `string` (values: Http, Https): Protocol.
  * provisioningState `string`: Provisioning state of the backend http settings resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
  * requestTimeout `integer`: Request timeout in seconds. Application Gateway will fail the request if response is not received within RequestTimeout. Acceptable values are from 1 second to 86400 seconds.

### ApplicationGatewayConnectionDraining
* ApplicationGatewayConnectionDraining `object`: Connection draining allows open connections to a backend server to be active for a specified time after the backend server got removed from the configuration.
  * drainTimeoutInSec **required** `integer`: The number of seconds connection draining is active. Acceptable values are from 1 second to 3600 seconds.
  * enabled **required** `boolean`: Whether connection draining is enabled or not.

### ApplicationGatewayFirewallDisabledRuleGroup
* ApplicationGatewayFirewallDisabledRuleGroup `object`: Allows to disable rules within a rule group or an entire rule group.
  * ruleGroupName **required** `string`: The name of the rule group that will be disabled.
  * rules `array`: The list of rules that will be disabled. If null, all rules of the rule group will be disabled.
    * items `integer`

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
  * provisioningState `string`: The provisioning state of the web application firewall rule set.
  * ruleGroups **required** `array`: The rule groups of the web application firewall rule set.
    * items [ApplicationGatewayFirewallRuleGroup](#applicationgatewayfirewallrulegroup)
  * ruleSetType **required** `string`: The type of the web application firewall rule set.
  * ruleSetVersion **required** `string`: The version of the web application firewall rule set type.

### ApplicationGatewayFrontendIPConfiguration
* ApplicationGatewayFrontendIPConfiguration `object`: Frontend IP configuration of an application gateway.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [ApplicationGatewayFrontendIPConfigurationPropertiesFormat](#applicationgatewayfrontendipconfigurationpropertiesformat)
  * id `string`: Resource ID.

### ApplicationGatewayFrontendIPConfigurationPropertiesFormat
* ApplicationGatewayFrontendIPConfigurationPropertiesFormat `object`: Properties of Frontend IP configuration of an application gateway.
  * privateIPAddress `string`: PrivateIPAddress of the network interface IP Configuration.
  * privateIPAllocationMethod `string` (values: Static, Dynamic): PrivateIP allocation method.
  * provisioningState `string`: Provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
  * publicIPAddress `object`
    * id `string`: Resource ID.
  * subnet `object`
    * id `string`: Resource ID.

### ApplicationGatewayFrontendPort
* ApplicationGatewayFrontendPort `object`: Frontend port of an application gateway.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [ApplicationGatewayFrontendPortPropertiesFormat](#applicationgatewayfrontendportpropertiesformat)
  * id `string`: Resource ID.

### ApplicationGatewayFrontendPortPropertiesFormat
* ApplicationGatewayFrontendPortPropertiesFormat `object`: Properties of Frontend port of an application gateway.
  * port `integer`: Frontend port
  * provisioningState `string`: Provisioning state of the frontend port resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

### ApplicationGatewayHttpListener
* ApplicationGatewayHttpListener `object`: Http listener of an application gateway.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [ApplicationGatewayHttpListenerPropertiesFormat](#applicationgatewayhttplistenerpropertiesformat)
  * id `string`: Resource ID.

### ApplicationGatewayHttpListenerPropertiesFormat
* ApplicationGatewayHttpListenerPropertiesFormat `object`: Properties of HTTP listener of an application gateway.
  * frontendIPConfiguration `object`
    * id `string`: Resource ID.
  * frontendPort `object`
    * id `string`: Resource ID.
  * hostName `string`: Host name of HTTP listener.
  * protocol `string` (values: Http, Https): Protocol.
  * provisioningState `string`: Provisioning state of the HTTP listener resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
  * requireServerNameIndication `boolean`: Applicable only if protocol is https. Enables SNI for multi-hosting.
  * sslCertificate `object`
    * id `string`: Resource ID.

### ApplicationGatewayIPConfiguration
* ApplicationGatewayIPConfiguration `object`: IP configuration of an application gateway. Currently 1 public and 1 private IP configuration is allowed.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [ApplicationGatewayIPConfigurationPropertiesFormat](#applicationgatewayipconfigurationpropertiesformat)
  * id `string`: Resource ID.

### ApplicationGatewayIPConfigurationPropertiesFormat
* ApplicationGatewayIPConfigurationPropertiesFormat `object`: Properties of IP configuration of an application gateway.
  * provisioningState `string`: Provisioning state of the application gateway subnet resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
  * subnet `object`
    * id `string`: Resource ID.

### ApplicationGatewayListResult
* ApplicationGatewayListResult `object`: Response for ListApplicationGateways API service call.
  * nextLink `string`: URL to get the next set of results.
  * value `array`: List of an application gateways in a resource group.
    * items [ApplicationGateway](#applicationgateway)

### ApplicationGatewayPathRule
* ApplicationGatewayPathRule `object`: Path rule of URL path map of an application gateway.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [ApplicationGatewayPathRulePropertiesFormat](#applicationgatewaypathrulepropertiesformat)
  * id `string`: Resource ID.

### ApplicationGatewayPathRulePropertiesFormat
* ApplicationGatewayPathRulePropertiesFormat `object`: Properties of probe of an application gateway.
  * backendAddressPool `object`
    * id `string`: Resource ID.
  * backendHttpSettings `object`
    * id `string`: Resource ID.
  * paths `array`: Path rules of URL path map.
    * items `string`
  * provisioningState `string`: Path rule of URL path map resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

### ApplicationGatewayProbe
* ApplicationGatewayProbe `object`: Probe of the application gateway.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [ApplicationGatewayProbePropertiesFormat](#applicationgatewayprobepropertiesformat)
  * id `string`: Resource ID.

### ApplicationGatewayProbePropertiesFormat
* ApplicationGatewayProbePropertiesFormat `object`: Properties of probe of an application gateway.
  * host `string`: Host name to send the probe to.
  * interval `integer`: The probing interval in seconds. This is the time interval between two consecutive probes. Acceptable values are from 1 second to 86400 seconds.
  * path `string`: Relative path of probe. Valid path starts from '/'. Probe is sent to <Protocol>://<host>:<port><path>
  * protocol `string` (values: Http, Https): Protocol.
  * provisioningState `string`: Provisioning state of the backend http settings resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
  * timeout `integer`: the probe timeout in seconds. Probe marked as failed if valid response is not received with this timeout period. Acceptable values are from 1 second to 86400 seconds.
  * unhealthyThreshold `integer`: The probe retry count. Backend server is marked down after consecutive probe failure count reaches UnhealthyThreshold. Acceptable values are from 1 second to 20.

### ApplicationGatewayPropertiesFormat
* ApplicationGatewayPropertiesFormat `object`: Properties of the application gateway.
  * authenticationCertificates `array`: Authentication certificates of the application gateway resource.
    * items [ApplicationGatewayAuthenticationCertificate](#applicationgatewayauthenticationcertificate)
  * backendAddressPools `array`: Backend address pool of the application gateway resource.
    * items [ApplicationGatewayBackendAddressPool](#applicationgatewaybackendaddresspool)
  * backendHttpSettingsCollection `array`: Backend http settings of the application gateway resource.
    * items [ApplicationGatewayBackendHttpSettings](#applicationgatewaybackendhttpsettings)
  * frontendIPConfigurations `array`: Frontend IP addresses of the application gateway resource.
    * items [ApplicationGatewayFrontendIPConfiguration](#applicationgatewayfrontendipconfiguration)
  * frontendPorts `array`: Frontend ports of the application gateway resource.
    * items [ApplicationGatewayFrontendPort](#applicationgatewayfrontendport)
  * gatewayIPConfigurations `array`: Subnets of application the gateway resource.
    * items [ApplicationGatewayIPConfiguration](#applicationgatewayipconfiguration)
  * httpListeners `array`: Http listeners of the application gateway resource.
    * items [ApplicationGatewayHttpListener](#applicationgatewayhttplistener)
  * operationalState `string` (values: Stopped, Starting, Running, Stopping): Operational state of the application gateway resource.
  * probes `array`: Probes of the application gateway resource.
    * items [ApplicationGatewayProbe](#applicationgatewayprobe)
  * provisioningState `string`: Provisioning state of the application gateway resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
  * requestRoutingRules `array`: Request routing rules of the application gateway resource.
    * items [ApplicationGatewayRequestRoutingRule](#applicationgatewayrequestroutingrule)
  * resourceGuid `string`: Resource GUID property of the application gateway resource.
  * sku [ApplicationGatewaySku](#applicationgatewaysku)
  * sslCertificates `array`: SSL certificates of the application gateway resource.
    * items [ApplicationGatewaySslCertificate](#applicationgatewaysslcertificate)
  * sslPolicy [ApplicationGatewaySslPolicy](#applicationgatewaysslpolicy)
  * urlPathMaps `array`: URL path map of the application gateway resource.
    * items [ApplicationGatewayUrlPathMap](#applicationgatewayurlpathmap)
  * webApplicationFirewallConfiguration [ApplicationGatewayWebApplicationFirewallConfiguration](#applicationgatewaywebapplicationfirewallconfiguration)

### ApplicationGatewayRequestRoutingRule
* ApplicationGatewayRequestRoutingRule `object`: Request routing rule of an application gateway.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [ApplicationGatewayRequestRoutingRulePropertiesFormat](#applicationgatewayrequestroutingrulepropertiesformat)
  * id `string`: Resource ID.

### ApplicationGatewayRequestRoutingRulePropertiesFormat
* ApplicationGatewayRequestRoutingRulePropertiesFormat `object`: Properties of request routing rule of the application gateway.
  * backendAddressPool `object`
    * id `string`: Resource ID.
  * backendHttpSettings `object`
    * id `string`: Resource ID.
  * httpListener `object`
    * id `string`: Resource ID.
  * provisioningState `string`: Provisioning state of the request routing rule resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
  * ruleType `string` (values: Basic, PathBasedRouting): Rule type.
  * urlPathMap `object`
    * id `string`: Resource ID.

### ApplicationGatewaySku
* ApplicationGatewaySku `object`: SKU of an application gateway
  * capacity `integer`: Capacity (instance count) of an application gateway.
  * name `string` (values: Standard_Small, Standard_Medium, Standard_Large, WAF_Medium, WAF_Large): Name of an application gateway SKU.
  * tier `string` (values: Standard, WAF): Tier of an application gateway.

### ApplicationGatewaySslCertificate
* ApplicationGatewaySslCertificate `object`: SSL certificates of an application gateway.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [ApplicationGatewaySslCertificatePropertiesFormat](#applicationgatewaysslcertificatepropertiesformat)
  * id `string`: Resource ID.

### ApplicationGatewaySslCertificatePropertiesFormat
* ApplicationGatewaySslCertificatePropertiesFormat `object`: Properties of SSL certificates of an application gateway.
  * data `string`: Base-64 encoded pfx certificate. Only applicable in PUT Request.
  * password `string`: Password for the pfx file specified in data. Only applicable in PUT request.
  * provisioningState `string`: Provisioning state of the SSL certificate resource Possible values are: 'Updating', 'Deleting', and 'Failed'.
  * publicCertData `string`: Base-64 encoded Public cert data corresponding to pfx specified in data. Only applicable in GET request.

### ApplicationGatewaySslPolicy
* ApplicationGatewaySslPolicy `object`: Application gateway SSL policy.
  * disabledSslProtocols `array`: SSL protocols to be disabled on application gateway.
    * items `string` (values: TLSv1_0, TLSv1_1, TLSv1_2)

### ApplicationGatewayUrlPathMap
* ApplicationGatewayUrlPathMap `object`: UrlPathMaps give a url path to the backend mapping information for PathBasedRouting.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * name `string`: Name of the resource that is unique within a resource group. This name can be used to access the resource.
  * properties [ApplicationGatewayUrlPathMapPropertiesFormat](#applicationgatewayurlpathmappropertiesformat)
  * id `string`: Resource ID.

### ApplicationGatewayUrlPathMapPropertiesFormat
* ApplicationGatewayUrlPathMapPropertiesFormat `object`: Properties of UrlPathMap of the application gateway.
  * defaultBackendAddressPool `object`
    * id `string`: Resource ID.
  * defaultBackendHttpSettings `object`
    * id `string`: Resource ID.
  * pathRules `array`: Path rule of URL path map resource.
    * items [ApplicationGatewayPathRule](#applicationgatewaypathrule)
  * provisioningState `string`: Provisioning state of the backend http settings resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.

### ApplicationGatewayWebApplicationFirewallConfiguration
* ApplicationGatewayWebApplicationFirewallConfiguration `object`: Application gateway web application firewall configuration.
  * disabledRuleGroups `array`: The disabled rule groups.
    * items [ApplicationGatewayFirewallDisabledRuleGroup](#applicationgatewayfirewalldisabledrulegroup)
  * enabled **required** `boolean`: Whether the web application firewall is enabled or not.
  * firewallMode **required** `string` (values: Detection, Prevention): Web application firewall mode.
  * ruleSetType **required** `string`: The type of the web application firewall rule set. Possible values are: 'OWASP'.
  * ruleSetVersion **required** `string`: The version of the rule set type.


