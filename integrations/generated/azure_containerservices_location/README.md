# @datafire/azure_containerservices_location

Client library for ContainerServiceClient

## Installation and Usage
```bash
npm install --save @datafire/azure_containerservices_location
```
```js
let azure_containerservices_location = require('@datafire/azure_containerservices_location').create({
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

The Container Service Client.

## Actions

### ContainerServices_ListOrchestrators
Gets a list of supported orchestrators in the specified subscription. The operation returns properties of each orchestrator including version and available upgrades.


```js
azure_containerservices_location.ContainerServices_ListOrchestrators({
  "api-version": "",
  "subscriptionId": "",
  "location": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: The name of a supported Azure region.
  * resource-type `string`: resource type for which the list of orchestrators needs to be returned

#### Output
* output [OrchestratorVersionProfileListResult](#orchestratorversionprofilelistresult)



## Definitions

### OrchestratorProfile
* OrchestratorProfile `object`: Contains information about orchestrator.
  * orchestratorType **required** `string`: Orchestrator type.
  * orchestratorVersion **required** `string`: Orchestrator version (major, minor, patch).

### OrchestratorVersionProfile
* OrchestratorVersionProfile `object`: The profile of an orchestrator and its available versions.
  * default **required** `boolean`: Installed by default if version is not specified.
  * orchestratorType **required** `string`: Orchestrator type.
  * orchestratorVersion **required** `string`: Orchestrator version (major, minor, patch).
  * upgrades **required** `array`: The list of available upgrade versions.
    * items [OrchestratorProfile](#orchestratorprofile)

### OrchestratorVersionProfileListResult
* OrchestratorVersionProfileListResult `object`: The list of versions for supported orchestrators.
  * id `string`: Id of the orchestrator version profile list result.
  * name `string`: Name of the orchestrator version profile list result.
  * properties **required** [OrchestratorVersionProfileProperties](#orchestratorversionprofileproperties)
  * type `string`: Type of the orchestrator version profile list result.

### OrchestratorVersionProfileProperties
* OrchestratorVersionProfileProperties `object`: The properties of an orchestrator version profile.
  * orchestrators **required** `array`: List of orchestrator version profiles.
    * items [OrchestratorVersionProfile](#orchestratorversionprofile)


