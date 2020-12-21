# @datafire/azure_trafficmanager

Client library for TrafficManagerManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_trafficmanager
```
```js
let azure_trafficmanager = require('@datafire/azure_trafficmanager').create({
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



## Actions

### Profiles_CheckTrafficManagerRelativeDnsNameAvailability
Checks the availability of a Traffic Manager Relative DNS name.


```js
azure_trafficmanager.Profiles_CheckTrafficManagerRelativeDnsNameAvailability({
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

### GeographicHierarchies_GetDefault
Gets the default Geographic Hierarchy used by the Geographic traffic routing method.


```js
azure_trafficmanager.GeographicHierarchies_GetDefault({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [TrafficManagerGeographicHierarchy](#trafficmanagergeographichierarchy)

### TrafficManagerUserMetricsKeys_Delete
Delete a subscription-level key used for Real User Metrics collection.


```js
azure_trafficmanager.TrafficManagerUserMetricsKeys_Delete({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DeleteOperationResult](#deleteoperationresult)

### TrafficManagerUserMetricsKeys_Get
Get the subscription-level key used for Real User Metrics collection.


```js
azure_trafficmanager.TrafficManagerUserMetricsKeys_Get({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [UserMetricsModel](#usermetricsmodel)

### TrafficManagerUserMetricsKeys_CreateOrUpdate
Create or update a subscription-level key used for Real User Metrics collection.


```js
azure_trafficmanager.TrafficManagerUserMetricsKeys_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [UserMetricsModel](#usermetricsmodel)

### Profiles_ListBySubscription
Lists all Traffic Manager profiles within a subscription.


```js
azure_trafficmanager.Profiles_ListBySubscription({
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

### Profiles_ListByResourceGroup
Lists all Traffic Manager profiles within a resource group.


```js
azure_trafficmanager.Profiles_ListByResourceGroup({
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
azure_trafficmanager.Profiles_Delete({
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
* output [DeleteOperationResult](#deleteoperationresult)

### Profiles_Get
Gets a Traffic Manager profile.


```js
azure_trafficmanager.Profiles_Get({
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
azure_trafficmanager.Profiles_Update({
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
azure_trafficmanager.Profiles_CreateOrUpdate({
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

### HeatMap_Get
Gets latest heatmap for Traffic Manager profile.


```js
azure_trafficmanager.HeatMap_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "profileName": "",
  "heatMapType": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group containing the Traffic Manager endpoint.
  * profileName **required** `string`: The name of the Traffic Manager profile.
  * heatMapType **required** `string` (values: default): The type of HeatMap for the Traffic Manager profile.
  * topLeft `array`: The top left latitude,longitude pair of the rectangular viewport to query for.
  * botRight `array`: The bottom right latitude,longitude pair of the rectangular viewport to query for.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [HeatMapModel](#heatmapmodel)

### Endpoints_Delete
Deletes a Traffic Manager endpoint.


```js
azure_trafficmanager.Endpoints_Delete({
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
* output [DeleteOperationResult](#deleteoperationresult)

### Endpoints_Get
Gets a Traffic Manager endpoint.


```js
azure_trafficmanager.Endpoints_Get({
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
azure_trafficmanager.Endpoints_Update({
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
azure_trafficmanager.Endpoints_CreateOrUpdate({
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
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### CloudError
* CloudError `object`: An error returned by the Azure Resource Manager
  * error [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`: The content of an error returned by the Azure Resource Manager
  * code `string`: Error code
  * details `array`: Error details
    * items [CloudErrorBody](#clouderrorbody)
  * message `string`: Error message
  * target `string`: Error target

### DeleteOperationResult
* DeleteOperationResult `object`: The result of the request or operation.
  * boolean `boolean`: The result of the operation or request.

### DnsConfig
* DnsConfig `object`: Class containing DNS settings in a Traffic Manager profile.
  * fqdn `string`: The fully-qualified domain name (FQDN) of the Traffic Manager profile. This is formed from the concatenation of the RelativeName with the DNS domain used by Azure Traffic Manager.
  * relativeName `string`: The relative DNS name provided by this Traffic Manager profile. This value is combined with the DNS domain name used by Azure Traffic Manager to form the fully-qualified domain name (FQDN) of the profile.
  * ttl `integer`: The DNS Time-To-Live (TTL), in seconds. This informs the local DNS resolvers and DNS clients how long to cache DNS responses provided by this Traffic Manager profile.

### Endpoint
* Endpoint `object`: Class representing a Traffic Manager endpoint.
  * properties [EndpointProperties](#endpointproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.

### EndpointProperties
* EndpointProperties `object`: Class representing a Traffic Manager endpoint properties.
  * customHeaders `array`: List of custom headers.
    * items `object`: Custom header name and value.
      * name `string`: Header name.
      * value `string`: Header value.
  * endpointLocation `string`: Specifies the location of the external or nested endpoints when using the 'Performance' traffic routing method.
  * endpointMonitorStatus `string` (values: CheckingEndpoint, Online, Degraded, Disabled, Inactive, Stopped): The monitoring status of the endpoint.
  * endpointStatus `string` (values: Enabled, Disabled): The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method.
  * geoMapping `array`: The list of countries/regions mapped to this endpoint when using the 'Geographic' traffic routing method. Please consult Traffic Manager Geographic documentation for a full list of accepted values.
    * items `string`
  * minChildEndpoints `integer`: The minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
  * priority `integer`: The priority of this endpoint when using the 'Priority' traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value.
  * subnets `array`: The list of subnets, IP addresses, and/or address ranges mapped to this endpoint when using the 'Subnet' traffic routing method. An empty list will match all ranges not covered by other endpoints.
    * items `object`: Subnet first address, scope, and/or last address.
      * first `string`: First address in the subnet.
      * last `string`: Last address in the subnet.
      * scope `integer`: Block size (number of leading bits in the subnet mask).
  * target `string`: The fully-qualified DNS name or IP address of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint.
  * targetResourceId `string`: The Azure Resource URI of the of the endpoint. Not applicable to endpoints of type 'ExternalEndpoints'.
  * weight `integer`: The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000.

### GeographicHierarchyProperties
* GeographicHierarchyProperties `object`: Class representing the properties of the Geographic hierarchy used with the Geographic traffic routing method.
  * geographicHierarchy [Region](#region)

### HeatMapEndpoint
* HeatMapEndpoint `object`: Class which is a sparse representation of a Traffic Manager endpoint.
  * endpointId `integer`: A number uniquely identifying this endpoint in query experiences.
  * resourceId `string`: The ARM Resource ID of this Traffic Manager endpoint.

### HeatMapModel
* HeatMapModel `object`: Class representing a Traffic Manager HeatMap.
  * properties [HeatMapProperties](#heatmapproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.

### HeatMapProperties
* HeatMapProperties `object`: Class representing a Traffic Manager HeatMap properties.
  * endTime `string`: The ending of the time window for this HeatMap, exclusive.
  * endpoints `array`: The endpoints used in this HeatMap calculation.
    * items [HeatMapEndpoint](#heatmapendpoint)
  * startTime `string`: The beginning of the time window for this HeatMap, inclusive.
  * trafficFlows `array`: The traffic flows produced in this HeatMap calculation.
    * items [TrafficFlow](#trafficflow)

### MonitorConfig
* MonitorConfig `object`: Class containing endpoint monitoring settings in a Traffic Manager profile.
  * customHeaders `array`: List of custom headers.
    * items `object`: Custom header name and value.
      * name `string`: Header name.
      * value `string`: Header value.
  * expectedStatusCodeRanges `array`: List of expected status code ranges.
    * items `object`: Min and max value of a status code range.
      * max `integer`: Max status code.
      * min `integer`: Min status code.
  * intervalInSeconds `integer`: The monitor interval for endpoints in this profile. This is the interval at which Traffic Manager will check the health of each endpoint in this profile.
  * path `string`: The path relative to the endpoint domain name used to probe for endpoint health.
  * port `integer`: The TCP port used to probe for endpoint health.
  * profileMonitorStatus `string` (values: CheckingEndpoints, Online, Degraded, Disabled, Inactive): The profile-level monitoring status of the Traffic Manager profile.
  * protocol `string` (values: HTTP, HTTPS, TCP): The protocol (HTTP, HTTPS or TCP) used to probe for endpoint health.
  * timeoutInSeconds `integer`: The monitor timeout for endpoints in this profile. This is the time that Traffic Manager allows endpoints in this profile to response to the health check.
  * toleratedNumberOfFailures `integer`: The number of consecutive failed health check that Traffic Manager tolerates before declaring an endpoint in this profile Degraded after the next failed health check.

### Profile
* Profile `object`: Class representing a Traffic Manager profile.
  * properties [ProfileProperties](#profileproperties)
  * location `string`: The Azure Region where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.

### ProfileListResult
* ProfileListResult `object`: The list Traffic Manager profiles operation response.
  * value `array`: Gets the list of Traffic manager profiles.
    * items [Profile](#profile)

### ProfileProperties
* ProfileProperties `object`: Class representing the Traffic Manager profile properties.
  * dnsConfig [DnsConfig](#dnsconfig)
  * endpoints `array`: The list of endpoints in the Traffic Manager profile.
    * items [Endpoint](#endpoint)
  * maxReturn `integer`: Maximum number of endpoints to be returned for MultiValue routing type.
  * monitorConfig [MonitorConfig](#monitorconfig)
  * profileStatus `string` (values: Enabled, Disabled): The status of the Traffic Manager profile.
  * trafficRoutingMethod `string` (values: Performance, Priority, Weighted, Geographic, MultiValue, Subnet): The traffic routing method of the Traffic Manager profile.
  * trafficViewEnrollmentStatus `string` (values: Enabled, Disabled): Indicates whether Traffic View is 'Enabled' or 'Disabled' for the Traffic Manager profile. Null, indicates 'Disabled'. Enabling this feature will increase the cost of the Traffic Manage profile.

### ProxyResource
* ProxyResource: The resource model definition for a ARM proxy resource. It will have everything other than required location and tags
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.

### QueryExperience
* QueryExperience `object`: Class representing a Traffic Manager HeatMap query experience properties.
  * endpointId **required** `integer`: The id of the endpoint from the 'endpoints' array which these queries were routed to.
  * latency `number`: The latency experienced by queries originating from this location.
  * queryCount **required** `integer`: The number of queries originating from this location.

### Region
* Region `object`: Class representing a region in the Geographic hierarchy used with the Geographic traffic routing method.
  * code `string`: The code of the region
  * name `string`: The name of the region
  * regions `array`: The list of Regions grouped under this Region in the Geographic Hierarchy.
    * items [Region](#region)

### Resource
* Resource `object`: The core properties of ARM resources
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.

### TrackedResource
* TrackedResource `object`: The resource model definition for a ARM tracked top level resource
  * location `string`: The Azure Region where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.

### TrafficFlow
* TrafficFlow `object`: Class representing a Traffic Manager HeatMap traffic flow properties.
  * latitude `number`: The approximate latitude that these queries originated from.
  * longitude `number`: The approximate longitude that these queries originated from.
  * queryExperiences `array`: The query experiences produced in this HeatMap calculation.
    * items [QueryExperience](#queryexperience)
  * sourceIp `string`: The IP address that this query experience originated from.

### TrafficManagerGeographicHierarchy
* TrafficManagerGeographicHierarchy `object`: Class representing the Geographic hierarchy used with the Geographic traffic routing method.
  * properties [GeographicHierarchyProperties](#geographichierarchyproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.

### TrafficManagerNameAvailability
* TrafficManagerNameAvailability `object`: Class representing a Traffic Manager Name Availability response.
  * message `string`: Descriptive message that explains why the name is not available, when applicable.
  * name `string`: The relative name.
  * nameAvailable `boolean`: Describes whether the relative name is available or not.
  * reason `string`: The reason why the name is not available, when applicable.
  * type `string`: Traffic Manager profile resource type.

### UserMetricsModel
* UserMetricsModel `object`: Class representing Traffic Manager User Metrics.
  * properties [UserMetricsProperties](#usermetricsproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.

### UserMetricsProperties
* UserMetricsProperties `object`: Class representing a Traffic Manager Real User Metrics key response.
  * key `string`: The key returned by the User Metrics operation.


