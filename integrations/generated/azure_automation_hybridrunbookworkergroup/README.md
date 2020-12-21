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

.then(data => {
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
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * $filter `string`: The filter to apply on the operation.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [HybridRunbookWorkerGroupsListResult](#hybridrunbookworkergroupslistresult)

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
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
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
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * hybridRunbookWorkerGroupName **required** `string`: The hybrid runbook worker group name
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [HybridRunbookWorkerGroup](#hybridrunbookworkergroup)

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
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * hybridRunbookWorkerGroupName **required** `string`: The hybrid runbook worker group name
  * parameters **required** [HybridRunbookWorkerGroupUpdateParameters](#hybridrunbookworkergroupupdateparameters)
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [HybridRunbookWorkerGroup](#hybridrunbookworkergroup)



## Definitions

### HybridRunbookWorker
* HybridRunbookWorker `object`: Definition of hybrid runbook worker.
  * ip `string`: Gets or sets the assigned machine IP address.
  * lastSeenDateTime `string`: Last Heartbeat from the Worker
  * name `string`: Gets or sets the worker machine name.
  * registrationTime `string`: Gets or sets the registration time of the worker machine.

### HybridRunbookWorkerGroup
* HybridRunbookWorkerGroup `object`: Definition of hybrid runbook worker group.
  * credential [RunAsCredentialAssociationProperty](#runascredentialassociationproperty)
  * groupType `string` (values: User, System): Type of the HybridWorkerGroup.
  * hybridRunbookWorkers `array`: Gets or sets the list of hybrid runbook workers.
    * items [HybridRunbookWorker](#hybridrunbookworker)
  * id `string`: Gets or sets the id of the resource.
  * name `string`: Gets or sets the name of the group.

### HybridRunbookWorkerGroupUpdateParameters
* HybridRunbookWorkerGroupUpdateParameters `object`: Parameters supplied to the update operation.
  * credential [RunAsCredentialAssociationProperty](#runascredentialassociationproperty)

### HybridRunbookWorkerGroupsListResult
* HybridRunbookWorkerGroupsListResult `object`: The response model for the list hybrid runbook worker groups.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: Gets or sets a list of hybrid runbook worker groups.
    * items [HybridRunbookWorkerGroup](#hybridrunbookworkergroup)

### RunAsCredentialAssociationProperty
* RunAsCredentialAssociationProperty `object`: Definition of RunAs credential to use for hybrid worker.
  * name `string`: Gets or sets the name of the credential.


