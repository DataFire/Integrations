# @datafire/azure_frontdoor_networkexperiment

Client library for NetworkExperiments

## Installation and Usage
```bash
npm install --save @datafire/azure_frontdoor_networkexperiment
```
```js
let azure_frontdoor_networkexperiment = require('@datafire/azure_frontdoor_networkexperiment').create({
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

These are the Network Experiment APIs.


## Actions

### NetworkExperimentProfiles_List
Gets a list of Network Experiment Profiles under a subscription


```js
azure_frontdoor_networkexperiment.NetworkExperimentProfiles_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.

#### Output
* output [ProfileList](#profilelist)

### NetworkExperimentProfiles_ListByResourceGroup
Gets a list of Network Experiment Profiles within a resource group under a subscription


```js
azure_frontdoor_networkexperiment.NetworkExperimentProfiles_ListByResourceGroup({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.

#### Output
* output [ProfileList](#profilelist)

### NetworkExperimentProfiles_Delete
Deletes an NetworkExperiment Profile by ProfileName


```js
azure_frontdoor_networkexperiment.NetworkExperimentProfiles_Delete({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "profileName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: The Profile identifier associated with the Tenant and Partner

#### Output
*Output schema unknown*

### NetworkExperimentProfiles_Get
Gets an NetworkExperiment Profile by ProfileName


```js
azure_frontdoor_networkexperiment.NetworkExperimentProfiles_Get({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "profileName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: The Profile identifier associated with the Tenant and Partner

#### Output
* output [Profile](#profile)

### NetworkExperimentProfiles_Update
Updates an NetworkExperimentProfiles


```js
azure_frontdoor_networkexperiment.NetworkExperimentProfiles_Update({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "profileName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: The Profile identifier associated with the Tenant and Partner
  * parameters **required** [ProfileUpdateModel](#profileupdatemodel)

#### Output
* output [Profile](#profile)

### NetworkExperimentProfiles_CreateOrUpdate
Creates an NetworkExperiment Profile


```js
azure_frontdoor_networkexperiment.NetworkExperimentProfiles_CreateOrUpdate({
  "profileName": "",
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * profileName **required** `string`: The Profile identifier associated with the Tenant and Partner
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * parameters **required** [Profile](#profile)

#### Output
* output [Profile](#profile)

### Experiments_ListByProfile
Gets a list of Experiments


```js
azure_frontdoor_networkexperiment.Experiments_ListByProfile({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "profileName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: The Profile identifier associated with the Tenant and Partner

#### Output
* output [ExperimentList](#experimentlist)

### Experiments_Delete
Deletes an Experiment


```js
azure_frontdoor_networkexperiment.Experiments_Delete({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "profileName": "",
  "experimentName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: The Profile identifier associated with the Tenant and Partner
  * experimentName **required** `string`: The Experiment identifier associated with the Experiment

#### Output
*Output schema unknown*

### Experiments_Get
Gets an Experiment by ExperimentName


```js
azure_frontdoor_networkexperiment.Experiments_Get({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "profileName": "",
  "experimentName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: The Profile identifier associated with the Tenant and Partner
  * experimentName **required** `string`: The Experiment identifier associated with the Experiment

#### Output
* output [Experiment](#experiment)

### Experiments_Update
Updates an Experiment


```js
azure_frontdoor_networkexperiment.Experiments_Update({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "profileName": "",
  "experimentName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: The Profile identifier associated with the Tenant and Partner
  * experimentName **required** `string`: The Experiment identifier associated with the Experiment
  * parameters **required** [ExperimentUpdateModel](#experimentupdatemodel)

#### Output
* output [Experiment](#experiment)

### Experiments_CreateOrUpdate
Creates or updates an Experiment


```js
azure_frontdoor_networkexperiment.Experiments_CreateOrUpdate({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "profileName": "",
  "experimentName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: The Profile identifier associated with the Tenant and Partner
  * experimentName **required** `string`: The Experiment identifier associated with the Experiment
  * parameters **required** [Experiment](#experiment)

#### Output
* output [Experiment](#experiment)

### Reports_GetLatencyScorecards
Gets a Latency Scorecard for a given Experiment


```js
azure_frontdoor_networkexperiment.Reports_GetLatencyScorecards({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "profileName": "",
  "experimentName": "",
  "aggregationInterval": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: The Profile identifier associated with the Tenant and Partner
  * experimentName **required** `string`: The Experiment identifier associated with the Experiment
  * endDateTimeUTC `string`: The end DateTime of the Latency Scorecard in UTC
  * country `string`: The country associated with the Latency Scorecard. Values are country ISO codes as specified here- https://www.iso.org/iso-3166-country-codes.html
  * aggregationInterval **required** `string` (values: Daily, Weekly, Monthly): The aggregation interval of the Latency Scorecard

#### Output
* output [LatencyScorecard](#latencyscorecard)

### Reports_GetTimeseries
Gets a Timeseries for a given Experiment


```js
azure_frontdoor_networkexperiment.Reports_GetTimeseries({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "profileName": "",
  "experimentName": "",
  "startDateTimeUTC": "",
  "endDateTimeUTC": "",
  "aggregationInterval": "",
  "timeseriesType": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: The Profile identifier associated with the Tenant and Partner
  * experimentName **required** `string`: The Experiment identifier associated with the Experiment
  * startDateTimeUTC **required** `string`: The start DateTime of the Timeseries in UTC
  * endDateTimeUTC **required** `string`: The end DateTime of the Timeseries in UTC
  * aggregationInterval **required** `string` (values: Hourly, Daily): The aggregation interval of the Timeseries
  * timeseriesType **required** `string` (values: MeasurementCounts, LatencyP50, LatencyP75, LatencyP95): The type of Timeseries
  * endpoint `string`: The specific endpoint
  * country `string`: The country associated with the Timeseries. Values are country ISO codes as specified here- https://www.iso.org/iso-3166-country-codes.html

#### Output
* output [Timeseries](#timeseries)

### PreconfiguredEndpoints_List
Gets a list of Preconfigured Endpoints


```js
azure_frontdoor_networkexperiment.PreconfiguredEndpoints_List({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "profileName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * profileName **required** `string`: The Profile identifier associated with the Tenant and Partner

#### Output
* output [PreconfiguredEndpointList](#preconfiguredendpointlist)



## Definitions

### Endpoint
* Endpoint `object`: Defines the endpoint properties
  * endpoint `string`: The endpoint URL
  * name `string`: The name of the endpoint

### ErrorResponse
* ErrorResponse `object`: Error response indicates Front Door service is not able to process the incoming request. The reason is provided in the error message.
  * code `string`: Error code.
  * message `string`: Error message indicating why the operation failed.

### Experiment
* Experiment `object`: Defines the properties of an Experiment
  * name `string`: The name of the Experiment
  * properties [ExperimentProperties](#experimentproperties)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ExperimentList
* ExperimentList `object`: Defines a list of Experiments. It contains a list of Experiment objects and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of Experiment objects if there are any.
  * value `array`: List of Experiments within a resource group.
    * items [Experiment](#experiment)

### ExperimentProperties
* ExperimentProperties `object`: Defines the properties of an experiment
  * description `string`: The description of the details or intents of the Experiment
  * enabledState `string` (values: Enabled, Disabled): The state of the Experiment
  * endpointA [Endpoint](#endpoint)
  * endpointB [Endpoint](#endpoint)
  * resourceState [NetworkExperimentResourceState](#networkexperimentresourcestate)
  * scriptFileUri `string`: The uri to the Script used in the Experiment
  * status `string`: The description of Experiment status from the server side

### ExperimentUpdateModel
* ExperimentUpdateModel `object`: Defines modifiable attributes of an Experiment
  * properties [ExperimentUpdateProperties](#experimentupdateproperties)
  * tags `object`: Resource tags.

### ExperimentUpdateProperties
* ExperimentUpdateProperties `object`: Defines the properties of an experiment
  * description `string`: The description of the intent or details of the Experiment
  * enabledState `string` (values: Enabled, Disabled): The state of the Experiment

### LatencyMetric
* LatencyMetric `object`: Defines the properties of a latency metric used in the latency scorecard
  * aCLower95CI `number`: The lower end of the 95% confidence interval for endpoint A
  * aHUpper95CI `number`: The upper end of the 95% confidence interval for endpoint A
  * aValue `number`: The metric value of the A endpoint
  * bCLower95CI `number`: The lower end of the 95% confidence interval for endpoint B
  * bUpper95CI `number`: The upper end of the 95% confidence interval for endpoint B
  * bValue `number`: The metric value of the B endpoint
  * delta `number`: The difference in value between endpoint A and B
  * deltaPercent `number`: The percent difference between endpoint A and B
  * endDateTimeUTC `string`: The end time of the Latency Scorecard in UTC
  * name `string`: The name of the Latency Metric

### LatencyScorecard
* LatencyScorecard `object`: Defines the LatencyScorecard
  * properties [LatencyScorecardProperties](#latencyscorecardproperties)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### LatencyScorecardProperties
* LatencyScorecardProperties `object`: Defines a the properties of a Latency Scorecard
  * country `string`: The country associated with the Latency Scorecard. Values are country ISO codes as specified here- https://www.iso.org/iso-3166-country-codes.html
  * description `string`: The description of the Latency Scorecard
  * endDateTimeUTC `string`: The end time of the Latency Scorecard in UTC
  * endpointA `string`: The A endpoint in the scorecard
  * endpointB `string`: The B endpoint in the scorecard
  * id `string`: The unique identifier of the Latency Scorecard
  * latencyMetrics `array`: The latency metrics of the Latency Scorecard
    * items [LatencyMetric](#latencymetric)
  * name `string`: The name of the Latency Scorecard
  * startDateTimeUTC `string`: The start time of the Latency Scorecard in UTC

### NetworkExperimentResourceState
* NetworkExperimentResourceState `string` (values: Creating, Enabling, Enabled, Disabling, Disabled, Deleting): Defines the server side resource status

### PreconfiguredEndpoint
* PreconfiguredEndpoint `object`: Defines the properties of a preconfigured endpoint
  * name `string`: The name of the endpoint
  * properties [PreconfiguredEndpointProperties](#preconfiguredendpointproperties)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### PreconfiguredEndpointList
* PreconfiguredEndpointList `object`: Defines a list of preconfigured endpoints.
  * nextLink `string`: URL to get the next set of PreconfiguredEndpoints if there are any.
  * value `array`: List of PreconfiguredEndpoints supported by NetworkExperiment.
    * items [PreconfiguredEndpoint](#preconfiguredendpoint)

### PreconfiguredEndpointProperties
* PreconfiguredEndpointProperties `object`: Defines the properties of a preconfigured endpoint
  * backend `string`: The preconfigured endpoint backend
  * description `string`: The description of the endpoint
  * endpoint `string`: The endpoint that is preconfigured
  * endpointType `string` (values: AFD, AzureRegion, CDN, ATM): The type of endpoint

### Profile
* Profile `object`: Defines an Network Experiment Profile and lists of Experiments
  * etag `string`: Gets a unique read-only string that changes whenever the resource is updated.
  * name `string`: The name of the Profile
  * properties [ProfileProperties](#profileproperties)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ProfileList
* ProfileList `object`: Defines a list of Profiles. It contains a list of Profile objects and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of Profile objects if there are any.
  * value `array`: List of Profiles within a resource group.
    * items [Profile](#profile)

### ProfileProperties
* ProfileProperties `object`: Defines the properties of an experiment
  * enabledState `string` (values: Enabled, Disabled): The state of the Experiment
  * resourceState [NetworkExperimentResourceState](#networkexperimentresourcestate)

### ProfileUpdateModel
* ProfileUpdateModel `object`: Defines modifiable attributes of a Profile
  * properties [ProfileUpdateProperties](#profileupdateproperties)
  * tags `object`: Resource tags.

### ProfileUpdateProperties
* ProfileUpdateProperties `object`: Defines the properties of an experiment
  * enabledState `string` (values: Enabled, Disabled): The enabled state of the Profile

### Timeseries
* Timeseries `object`: Defines the Timeseries
  * properties [TimeseriesProperties](#timeseriesproperties)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### TimeseriesDataPoint
* TimeseriesDataPoint `object`: Defines a timeseries datapoint used in a timeseries
  * dateTimeUTC `string`: The DateTime of the Timeseries data point in UTC
  * value `number`: The Value of the Timeseries data point

### TimeseriesProperties
* TimeseriesProperties `object`: Defines the properties of a timeseries
  * aggregationInterval `string` (values: Hourly, Daily): The aggregation interval of the Timeseries
  * country `string`: The country associated with the Timeseries. Values are country ISO codes as specified here- https://www.iso.org/iso-3166-country-codes.html
  * endDateTimeUTC `string`: The end DateTime of the Timeseries in UTC
  * endpoint `string`: The endpoint associated with the Timeseries data point
  * startDateTimeUTC `string`: The start DateTime of the Timeseries in UTC
  * timeseriesData `array`: The set of data points for the timeseries
    * items [TimeseriesDataPoint](#timeseriesdatapoint)
  * timeseriesType `string` (values: MeasurementCounts, LatencyP50, LatencyP75, LatencyP95): The type of Timeseries


