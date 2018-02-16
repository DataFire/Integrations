# @datafire/azure_trafficmanager_trafficmanageranalytics

Client library for TrafficManagerManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_trafficmanager_trafficmanageranalytics
```
```js
let azure_trafficmanager_trafficmanageranalytics = require('@datafire/azure_trafficmanager_trafficmanageranalytics').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_trafficmanager_trafficmanageranalytics.TrafficManagerUserMetricsKeys_Delete({
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### TrafficManagerUserMetricsKeys_Delete
Delete a subscription-level key used for Real User Metrics collection.


```js
azure_trafficmanager_trafficmanageranalytics.TrafficManagerUserMetricsKeys_Delete({
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
azure_trafficmanager_trafficmanageranalytics.TrafficManagerUserMetricsKeys_Get({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [TrafficManagerUserMetricsKeyModel](#trafficmanagerusermetricskeymodel)

### TrafficManagerUserMetricsKeys_CreateOrUpdate
Create or update a subscription-level key used for Real User Metrics collection.


```js
azure_trafficmanager_trafficmanageranalytics.TrafficManagerUserMetricsKeys_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [TrafficManagerUserMetricsKeyModel](#trafficmanagerusermetricskeymodel)

### HeatMap_Get
Gets latest heatmap for Traffic Manager profile.


```js
azure_trafficmanager_trafficmanageranalytics.HeatMap_Get({
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



## Definitions

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

### HeatMapEndpoint
* HeatMapEndpoint `object`: Class which is a sparse representation of a Traffic Manager endpoint.
  * endpointId `integer`: A number uniquely identifying this endpoint in query experiences.
  * resourceId `string`: The ARM Resource ID of this Traffic Manager endpoint.

### HeatMapModel
* HeatMapModel `object`: Class representing a Traffic Manager HeatMap.
  * properties [HeatMapProperties](#heatmapproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Network/trafficmanagerProfiles.

### HeatMapProperties
* HeatMapProperties `object`: Class representing a Traffic Manager HeatMap properties.
  * endTime `string`: The ending of the time window for this HeatMap, exclusive.
  * endpoints `array`: The endpoints used in this HeatMap calculation.
    * items [HeatMapEndpoint](#heatmapendpoint)
  * startTime `string`: The beginning of the time window for this HeatMap, inclusive.
  * trafficFlows `array`: The traffic flows produced in this HeatMap calculation.
    * items [TrafficFlow](#trafficflow)

### ProxyResource
* ProxyResource: The resource model definition for a ARM proxy resource. It will have everything other than required location and tags
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Network/trafficmanagerProfiles.

### QueryExperience
* QueryExperience `object`: Class representing a Traffic Manager HeatMap query experience properties.
  * endpointId **required** `integer`: The id of the endpoint from the 'endpoints' array which these queries were routed to.
  * latency `number`: The latency experienced by queries originating from this location.
  * queryCount **required** `integer`: The number of queries originating from this location.

### Resource
* Resource `object`: The core properties of ARM resources
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Network/trafficmanagerProfiles.

### TrackedResource
* TrackedResource `object`: The resource model definition for a ARM tracked top level resource
  * location `string`: The Azure Region where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Network/trafficmanagerProfiles.

### TrafficFlow
* TrafficFlow `object`: Class representing a Traffic Manager HeatMap traffic flow properties.
  * latitude `number`: The approximate latitude that these queries originated from.
  * longitude `number`: The approximate longitude that these queries originated from.
  * queryExperiences `array`: The query experiences produced in this HeatMap calculation.
    * items [QueryExperience](#queryexperience)
  * sourceIp `string`: The IP address that this query experience originated from.

### TrafficManagerUserMetricsKeyModel
* TrafficManagerUserMetricsKeyModel `object`: Class representing a Traffic Manager Real User Metrics key response.
  * id `string`: Fully qualified resource Id for the resource. Ex - /providers/Microsoft.Network/trafficManagerUserMetricsKeys
  * key `string`: The key returned by the Real User Metrics operation.
  * name `string`: The word default.
  * type `string`: The type of the resource. Ex- Microsoft.Network/trafficManagerUserMetricsKeys.
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Network/trafficmanagerProfiles.


