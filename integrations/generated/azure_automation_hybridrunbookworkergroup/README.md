# @datafire/azure_automation_hybridrunbookworkergroup

Client library for AutomationManagement

## Installation and Usage
```bash
npm install --save @datafire/azure_automation_hybridrunbookworkergroup
```
```js
let azure_automation_hybridrunbookworkergroup = require('@datafire/azure_automation_hybridrunbookworkergroup').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_automation_hybridrunbookworkergroup.HybridRunbookWorkerGroup_ListByAutomationAccount({
  "resourceGroupName": "",
  "automationAccountName": "",
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### HybridRunbookWorkerGroup_ListByAutomationAccount
Retrieve a list of hybrid runbook worker groups.


```js
azure_automation_hybridrunbookworkergroup.HybridRunbookWorkerGroup_ListByAutomationAccount({
  "resourceGroupName": "",
  "automationAccountName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: The response model for the list hybrid runbook worker groups.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: Gets or sets a list of hybrid runbook worker groups.
    * items `object`: Definition of hybrid runbook worker group.
      * credential `object`: Definition of runas credential to use for hybrid worker.
        * name `string`: Gets or sets the name of the credential.
      * hybridRunbookWorkers `array`: Gets or sets the list of hybrid runbook workers.
        * items `object`: Definition of hybrid runbook worker.
          * ip `string`: Gets or sets the assigned machine IP address.
          * name `string`: Gets or sets the worker machine name.
          * registrationTime `string`: Gets or sets the registration time of the worker machine.
      * id `string`: Gets or sets the id of the resource.
      * name `string`: Gets or sets the name of the group.

### HybridRunbookWorkerGroup_Delete
Delete a hybrid runbook worker group.


```js
azure_automation_hybridrunbookworkergroup.HybridRunbookWorkerGroup_Delete({
  "resourceGroupName": "",
  "automationAccountName": "",
  "hybridRunbookWorkerGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: Automation account name.
  * hybridRunbookWorkerGroupName **required** `string`: The hybrid runbook worker group name
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### HybridRunbookWorkerGroup_Get
Retrieve a hybrid runbook worker group.


```js
azure_automation_hybridrunbookworkergroup.HybridRunbookWorkerGroup_Get({
  "resourceGroupName": "",
  "automationAccountName": "",
  "hybridRunbookWorkerGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * hybridRunbookWorkerGroupName **required** `string`: The hybrid runbook worker group name
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of hybrid runbook worker group.
  * credential `object`: Definition of runas credential to use for hybrid worker.
    * name `string`: Gets or sets the name of the credential.
  * hybridRunbookWorkers `array`: Gets or sets the list of hybrid runbook workers.
    * items `object`: Definition of hybrid runbook worker.
      * ip `string`: Gets or sets the assigned machine IP address.
      * name `string`: Gets or sets the worker machine name.
      * registrationTime `string`: Gets or sets the registration time of the worker machine.
  * id `string`: Gets or sets the id of the resource.
  * name `string`: Gets or sets the name of the group.

### HybridRunbookWorkerGroup_Update
Update a hybrid runbook worker group.


```js
azure_automation_hybridrunbookworkergroup.HybridRunbookWorkerGroup_Update({
  "resourceGroupName": "",
  "automationAccountName": "",
  "hybridRunbookWorkerGroupName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * hybridRunbookWorkerGroupName **required** `string`: The hybrid runbook worker group name
  * parameters **required** `object`: Parameters supplied to the update operation.
    * credential `object`: Definition of runas credential to use for hybrid worker.
      * name `string`: Gets or sets the name of the credential.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of hybrid runbook worker group.
  * credential `object`: Definition of runas credential to use for hybrid worker.
    * name `string`: Gets or sets the name of the credential.
  * hybridRunbookWorkers `array`: Gets or sets the list of hybrid runbook workers.
    * items `object`: Definition of hybrid runbook worker.
      * ip `string`: Gets or sets the assigned machine IP address.
      * name `string`: Gets or sets the worker machine name.
      * registrationTime `string`: Gets or sets the registration time of the worker machine.
  * id `string`: Gets or sets the id of the resource.
  * name `string`: Gets or sets the name of the group.



## Definitions

*This integration has no definitions*
