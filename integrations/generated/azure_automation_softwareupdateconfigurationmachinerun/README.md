# @datafire/azure_automation_softwareupdateconfigurationmachinerun

Client library for Update Management

## Installation and Usage
```bash
npm install --save @datafire/azure_automation_softwareupdateconfigurationmachinerun
```
```js
let azure_automation_softwareupdateconfigurationmachinerun = require('@datafire/azure_automation_softwareupdateconfigurationmachinerun').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_automation_softwareupdateconfigurationmachinerun.SoftwareUpdateConfigurationMachineRuns_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

APIs for managing software update configurations.

## Actions

### SoftwareUpdateConfigurationMachineRuns_List
Return list of software update configuration machine runs


```js
azure_automation_softwareupdateconfigurationmachinerun.SoftwareUpdateConfigurationMachineRuns_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The name of the automation account.
  * api-version **required** `string`: Client Api Version.
  * clientRequestId `string`: Identifies this specific client request.
  * $filter `string`: The filter to apply on the operation. You can use the following filters: 'properties/osType', 'properties/status', 'properties/startTime', and 'properties/softwareUpdateConfiguration/name'
  * $skip `string`: number of entries you skip before returning results
  * $top `string`: Maximum number of entries returned in the results collection

#### Output
* output `object`: result of listing all software update configuration machine runs
  * nextLink `string`: link to next page of results.
  * value `array`: outer object returned when listing all software update configuration machine runs
    * items `object`: Software update configuration machine run model.
      * id `string`: Resource Id of the software update configuration machine run
      * name `string`: Name of the software update configuration machine run
      * properties `object`: Software update configuration machine run properties.
        * configuredDuration `string`: configured duration for the software update configuration run.
        * correlationId `string`: correlation id of the software update configuration machine run
        * createdBy `string`: createdBy property, which only appears in the response.
        * creationTime `string`: Creation time of theresource, which only appears in the response.
        * endTime `string`: End time of the software update configuration machine run.
        * job `object`: Software update configuration machine run job navigation properties.
          * id `string`: Id of the job associated with the software update configuration run
        * lastModifiedBy `string`: lastModifiedBy property, which only appears in the response.
        * lastModifiedTime `string`: Last time resource was modified, which only appears in the response.
        * osType `string`: Operating system target of the software update configuration triggered this run
        * softwareUpdateConfiguration `object`: Software update configuration Run Navigation model.
          * name `string`: Name of the software update configuration triggered the software update configuration run
        * sourceComputerId `string`: source computer id of the software update configuration machine run
        * startTime `string`: Start time of the software update configuration machine run.
        * status `string`: Status of the software update configuration machine run.
        * targetComputer `string`: name of the updated computer
        * targetComputerType `string`: type of the updated computer.

### SoftwareUpdateConfigurationMachineRuns_GetById
Get a single software update configuration machine run by Id.


```js
azure_automation_softwareupdateconfigurationmachinerun.SoftwareUpdateConfigurationMachineRuns_GetById({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "softwareUpdateConfigurationMachineRunId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The name of the automation account.
  * softwareUpdateConfigurationMachineRunId **required** `string`: The Id of the software update configuration machine run.
  * api-version **required** `string`: Client Api Version.
  * clientRequestId `string`: Identifies this specific client request.

#### Output
* output `object`: Software update configuration machine run model.
  * id `string`: Resource Id of the software update configuration machine run
  * name `string`: Name of the software update configuration machine run
  * properties `object`: Software update configuration machine run properties.
    * configuredDuration `string`: configured duration for the software update configuration run.
    * correlationId `string`: correlation id of the software update configuration machine run
    * createdBy `string`: createdBy property, which only appears in the response.
    * creationTime `string`: Creation time of theresource, which only appears in the response.
    * endTime `string`: End time of the software update configuration machine run.
    * job `object`: Software update configuration machine run job navigation properties.
      * id `string`: Id of the job associated with the software update configuration run
    * lastModifiedBy `string`: lastModifiedBy property, which only appears in the response.
    * lastModifiedTime `string`: Last time resource was modified, which only appears in the response.
    * osType `string`: Operating system target of the software update configuration triggered this run
    * softwareUpdateConfiguration `object`: Software update configuration Run Navigation model.
      * name `string`: Name of the software update configuration triggered the software update configuration run
    * sourceComputerId `string`: source computer id of the software update configuration machine run
    * startTime `string`: Start time of the software update configuration machine run.
    * status `string`: Status of the software update configuration machine run.
    * targetComputer `string`: name of the updated computer
    * targetComputerType `string`: type of the updated computer.



## Definitions

*This integration has no definitions*
