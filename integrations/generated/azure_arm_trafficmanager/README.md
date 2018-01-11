# @datafire/azure_arm_trafficmanager

Client library for TrafficManagerManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_trafficmanager
```
```js
let azure_arm_trafficmanager = require('@datafire/azure_arm_trafficmanager').create();

azure_arm_trafficmanager.Profiles_CheckTrafficManagerRelativeDnsNameAvailability({}).then(data => {
  console.log(data);
})
```

## Description



## Actions

### Profiles_CheckTrafficManagerRelativeDnsNameAvailability
Checks the availability of a Traffic Manager Relative DNS name.


```js
azure_arm_trafficmanager.Profiles_CheckTrafficManagerRelativeDnsNameAvailability({
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * parameters **required** [CheckTrafficManagerRelativeDnsNameAvailabilityParameters](#checktrafficmanagerrelativednsnameavailabilityparameters)
  * api-version **required** `string`: Client Api Version.

#### Output
* output [TrafficManagerNameAvailability](#trafficmanagernameavailability)

### Profiles_ListAll
Lists all Traffic Manager profiles within a subscription.


```js
azure_arm_trafficmanager.Profiles_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ProfileListResult](#profilelistresult)

### Profiles_ListAllInResourceGroup
Lists all Traffic Manager profiles within a resource group.


```js
azure_arm_trafficmanager.Profiles_ListAllInResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Traffic Manager profiles to be listed.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ProfileListResult](#profilelistresult)

### Profiles_Delete
Deletes a Traffic Manager profile.


```js
azure_arm_trafficmanager.Profiles_Delete({
  "resourceGroupName": "",
  "profileName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Traffic Manager profile to be deleted.
  * profileName **required** `string`: The name of the Traffic Manager profile to be deleted.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Profiles_Get
Gets a Traffic Manager profile.


```js
azure_arm_trafficmanager.Profiles_Get({
  "resourceGroupName": "",
  "profileName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Traffic Manager profile.
  * profileName **required** `string`: The name of the Traffic Manager profile.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Profile](#profile)

### Profiles_Update
Update a Traffic Manager profile.


```js
azure_arm_trafficmanager.Profiles_Update({
  "resourceGroupName": "",
  "profileName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Traffic Manager profile.
  * profileName **required** `string`: The name of the Traffic Manager profile.
  * parameters **required** [Profile](#profile)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Profile](#profile)

### Profiles_CreateOrUpdate
Create or update a Traffic Manager profile.


```js
azure_arm_trafficmanager.Profiles_CreateOrUpdate({
  "resourceGroupName": "",
  "profileName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Traffic Manager profile.
  * profileName **required** `string`: The name of the Traffic Manager profile.
  * parameters **required** [Profile](#profile)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Profile](#profile)

### Endpoints_Delete
Deletes a Traffic Manager endpoint.


```js
azure_arm_trafficmanager.Endpoints_Delete({
  "resourceGroupName": "",
  "profileName": "",
  "endpointType": "",
  "endpointName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Traffic Manager endpoint to be deleted.
  * profileName **required** `string`: The name of the Traffic Manager profile.
  * endpointType **required** `string`: The type of the Traffic Manager endpoint to be deleted.
  * endpointName **required** `string`: The name of the Traffic Manager endpoint to be deleted.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Endpoints_Get
Gets a Traffic Manager endpoint.


```js
azure_arm_trafficmanager.Endpoints_Get({
  "resourceGroupName": "",
  "profileName": "",
  "endpointType": "",
  "endpointName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Traffic Manager endpoint.
  * profileName **required** `string`: The name of the Traffic Manager profile.
  * endpointType **required** `string`: The type of the Traffic Manager endpoint.
  * endpointName **required** `string`: The name of the Traffic Manager endpoint.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Endpoint](#endpoint)

### Endpoints_Update
Update a Traffic Manager endpoint.


```js
azure_arm_trafficmanager.Endpoints_Update({
  "resourceGroupName": "",
  "profileName": "",
  "endpointType": "",
  "endpointName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Traffic Manager endpoint to be updated.
  * profileName **required** `string`: The name of the Traffic Manager profile.
  * endpointType **required** `string`: The type of the Traffic Manager endpoint to be updated.
  * endpointName **required** `string`: The name of the Traffic Manager endpoint to be updated.
  * parameters **required** [Endpoint](#endpoint)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Endpoint](#endpoint)

### Endpoints_CreateOrUpdate
Create or update a Traffic Manager endpoint.


```js
azure_arm_trafficmanager.Endpoints_CreateOrUpdate({
  "resourceGroupName": "",
  "profileName": "",
  "endpointType": "",
  "endpointName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the Traffic Manager endpoint to be created or updated.
  * profileName **required** `string`: The name of the Traffic Manager profile.
  * endpointType **required** `string`: The type of the Traffic Manager endpoint to be created or updated.
  * endpointName **required** `string`: The name of the Traffic Manager endpoint to be created or updated.
  * parameters **required** [Endpoint](#endpoint)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Endpoint](#endpoint)



## Definitions

### CheckTrafficManagerRelativeDnsNameAvailabilityParameters
* CheckTrafficManagerRelativeDnsNameAvailabilityParameters `object`: Parameters supplied to check Traffic Manager name operation.
  * name `string`: Gets or sets the name of the resource.
  * type `string`: Gets or sets the type of the resource.

### DnsConfig
* DnsConfig `object`: Class containing DNS settings in a Traffic Manager profile.
  * fqdn `string`: Gets or sets the fully-qualified domain name (FQDN) of the Traffic Manager profile.  This is formed from the concatenation of the RelativeName with the DNS domain used by Azure Traffic Manager.
  * relativeName `string`: Gets or sets the relative DNS name provided by this Traffic Manager profile.  This value is combined with the DNS domain name used by Azure Traffic Manager to form the fully-qualified domain name (FQDN) of the profile.
  * ttl `integer`: Gets or sets the DNS Ttime-To-Live (TTL), in seconds.  This informs the local DNS resolvers and DNS clients how long to cache DNS responses provided by this Traffic Manager profile.

### Endpoint
* Endpoint `object`: Class representing a Traffic Manager endpoint.
  * id `string`: Gets or sets the ID of the Traffic Manager endpoint.
  * name `string`: Gets or sets the name of the Traffic Manager endpoint.
  * properties [EndpointProperties](#endpointproperties)
  * type `string`: Gets or sets the endpoint type of the Traffic Manager endpoint.

### EndpointProperties
* EndpointProperties `object`: Class representing a Traffic Manager endpoint properties.
  * endpointLocation `string`: Specifies the location of the external or nested endpoints when using the ‘Performance’ traffic routing method.
  * endpointMonitorStatus `string`: Gets or sets the monitoring status of the endpoint.
  * endpointStatus `string`: Gets or sets the status of the endpoint..  If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method.  Possible values are 'Enabled' and 'Disabled'.
  * minChildEndpoints `integer`: Gets or sets the minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
  * priority `integer`: Gets or sets the priority of this endpoint when using the ‘Priority’ traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value.
  * target `string`: Gets or sets the fully-qualified DNS name of the endpoint.  Traffic Manager returns this value in DNS responses to direct traffic to this endpoint.
  * targetResourceId `string`: Gets or sets the Azure Resource URI of the of the endpoint.  Not applicable to endpoints of type 'ExternalEndpoints'.
  * weight `integer`: Gets or sets the weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000.

### MonitorConfig
* MonitorConfig `object`: Class containing endpoint monitoring settings in a Traffic Manager profile.
  * path `string`: Gets or sets the path relative to the endpoint domain name used to probe for endpoint health.
  * port `integer`: Gets or sets the TCP port used to probe for endpoint health.
  * profileMonitorStatus `string`: Gets or sets the profile-level monitoring status of the Traffic Manager profile.
  * protocol `string`: Gets or sets the protocol (HTTP or HTTPS) used to probe for endpoint health.

### Profile
* Profile `object`: Class representing a Traffic Manager profile.
  * properties [ProfileProperties](#profileproperties)
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### ProfileListResult
* ProfileListResult `object`: The list Traffic Manager profiles operation response.
  * value `array`: Gets the list of Traffic manager profiles.
    * items [Profile](#profile)

### ProfileProperties
* ProfileProperties `object`: Class representing the Traffic Manager profile properties.
  * dnsConfig [DnsConfig](#dnsconfig)
  * endpoints `array`: Gets or sets the list of endpoints in the Traffic Manager profile.
    * items [Endpoint](#endpoint)
  * monitorConfig [MonitorConfig](#monitorconfig)
  * profileStatus `string`: Gets or sets the status of the Traffic Manager profile.  Possible values are 'Enabled' and 'Disabled'.
  * trafficRoutingMethod `string`: Gets or sets the traffic routing method of the Traffic Manager profile.  Possible values are 'Performance', 'Weighted', or 'Priority'.

### Resource
* Resource `object`
  * id `string`: Resource Id
  * location `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### SubResource
* SubResource `object`
  * id `string`: Resource Id

### TrafficManagerNameAvailability
* TrafficManagerNameAvailability `object`: Class representing a Traffic Manager Name Availability response.
  * message `string`: Descriptive message that explains why the name is not available, when applicable.
  * name `string`: The relative name.
  * nameAvailable `boolean`: Describes whether the relative name is available or not.
  * reason `string`: The reason why the name is not available, when applicable.
  * type `string`: Traffic Manager profile resource type.


