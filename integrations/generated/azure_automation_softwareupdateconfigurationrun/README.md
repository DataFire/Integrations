# @datafire/azure_automation_softwareupdateconfigurationrun

Client library for Update Management

## Installation and Usage
```bash
npm install --save @datafire/azure_automation_softwareupdateconfigurationrun
```
```js
let azure_automation_softwareupdateconfigurationrun = require('@datafire/azure_automation_softwareupdateconfigurationrun').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_automation_softwareupdateconfigurationrun.SoftwareUpdateConfigurationRuns_List({
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

### SoftwareUpdateConfigurationRuns_List
Return list of software update configuration runs


```js
azure_automation_softwareupdateconfigurationrun.SoftwareUpdateConfigurationRuns_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * api-version **required** `string`: Client Api Version.
  * clientRequestId `string`: Identifies this specific client request.
  * $filter `string`: The filter to apply on the operation. You can use the following filters: 'properties/osType', 'properties/status', 'properties/startTime', and 'properties/softwareUpdateConfiguration/name'
  * $skip `string`: number of entries you skip before returning results
  * $top `string`: Maximum number of entries returned in the results collection

#### Output
* output `object`: result of listing all software update configuration runs
  * nextLink `string`: link to next page of results.
  * value `array`: outer object returned when listing all software update configuration runs
    * items `object`: Software update configuration Run properties.
      * id `string`: Resource Id of the software update configuration run
      * name `string`: Name of the software update configuration run.
      * properties `object`: Software update configuration properties.
        * computerCount `integer`: Number of computers in the software update configuration run.
        * configuredDuration `string`: configured duration for the software update configuration run.
        * createdBy `string`: createdBy property, which only appears in the response.
        * creationTime `string`: Creation time of theresource, which only appears in the response.
        * endTime `string`: End time of the software update configuration run.
        * failedCount `integer`: Number of computers with failed status.
        * lastModifiedBy `string`: lastModifiedBy property, which only appears in the response.
        * lastModifiedTime `string`: Last time resource was modified, which only appears in the response.
        * osType `string`: Operating system target of the software update configuration triggered this run
        * softwareUpdateConfiguration `object`: Software update configuration Run Navigation model.
          * name `string`: Name of the software update configuration triggered the software update configuration run
        * startTime `string`: Etart time of the software update configuration run.
        * status `string`: Status of the software update configuration run.

### SoftwareUpdateConfigurationRuns_GetById
Get a single software update configuration Run by Id.


```js
azure_automation_softwareupdateconfigurationrun.SoftwareUpdateConfigurationRuns_GetById({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "softwareUpdateConfigurationRunId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * softwareUpdateConfigurationRunId **required** `string`: The Id of the software update configuration run.
  * api-version **required** `string`: Client Api Version.
  * clientRequestId `string`: Identifies this specific client request.

#### Output
* output `object`: Software update configuration Run properties.
  * id `string`: Resource Id of the software update configuration run
  * name `string`: Name of the software update configuration run.
  * properties `object`: Software update configuration properties.
    * computerCount `integer`: Number of computers in the software update configuration run.
    * configuredDuration `string`: configured duration for the software update configuration run.
    * createdBy `string`: createdBy property, which only appears in the response.
    * creationTime `string`: Creation time of theresource, which only appears in the response.
    * endTime `string`: End time of the software update configuration run.
    * failedCount `integer`: Number of computers with failed status.
    * lastModifiedBy `string`: lastModifiedBy property, which only appears in the response.
    * lastModifiedTime `string`: Last time resource was modified, which only appears in the response.
    * osType `string`: Operating system target of the software update configuration triggered this run
    * softwareUpdateConfiguration `object`: Software update configuration Run Navigation model.
      * name `string`: Name of the software update configuration triggered the software update configuration run
    * startTime `string`: Etart time of the software update configuration run.
    * status `string`: Status of the software update configuration run.



## Definitions

*This integration has no definitions*
