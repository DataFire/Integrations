# @datafire/azure_monitor_vminsightsonboarding_api

Client library for VM Insights Onboarding

## Installation and Usage
```bash
npm install --save @datafire/azure_monitor_vminsightsonboarding_api
```
```js
let azure_monitor_vminsightsonboarding_api = require('@datafire/azure_monitor_vminsightsonboarding_api').create({
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

API to manage VM Insights Onboarding

## Actions

### VMInsights_GetOnboardingStatus
Retrieves the VM Insights onboarding status for the specified resource or resource scope.


```js
azure_monitor_vminsightsonboarding_api.VMInsights_GetOnboardingStatus({
  "api-version": "",
  "resourceUri": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version.
  * resourceUri **required** `string`: The fully qualified Azure Resource manager identifier of the resource, or scope, whose status to retrieve.

#### Output
* output [VMInsightsOnboardingStatus](#vminsightsonboardingstatus)



## Definitions

### DataContainer
* DataContainer `object`: Information about a container with data for a given resource.
  * workspace **required** [WorkspaceInfo](#workspaceinfo)

### Error
* Error `object`: Error details.
  * code **required** `string`: Error code identifying the specific error.
  * message `string`: Error message in the caller's locale.

### ProxyResource
* ProxyResource `object`: An azure resource object
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### ResponseWithError
* ResponseWithError `object`: An error response from the API.
  * error **required** [Error](#error)

### VMInsightsOnboardingStatus
* VMInsightsOnboardingStatus `object`: VM Insights onboarding status for a resource.
  * properties `object`: Resource properties.
    * data `array`: Containers that currently store VM Insights data for the specified resource.
      * items [DataContainer](#datacontainer)
    * dataStatus **required** `string` (values: present, notPresent): The status of VM Insights data from the resource. When reported as `present` the data array will contain information about the data containers to which data for the specified resource is being routed.
    * onboardingStatus **required** `string` (values: onboarded, notOnboarded, unknown): The onboarding status for the resource. Note that, a higher level scope, e.g., resource group or subscription, is considered onboarded if at least one resource under it is onboarded.
    * resourceId **required** `string`: Azure Resource Manager identifier of the resource whose onboarding status is being represented.
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### WorkspaceInfo
* WorkspaceInfo `object`: Information about a Log Analytics Workspace.
  * id **required** `string`: Azure Resource Manager identifier of the Log Analytics Workspace.
  * location **required** `string`: Location of the Log Analytics workspace.
  * properties **required** `object`: Resource properties.
    * customerId **required** `string`: Log Analytics workspace identifier.


