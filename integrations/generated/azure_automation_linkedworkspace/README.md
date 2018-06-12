# @datafire/azure_automation_linkedworkspace

Client library for AutomationManagement

## Installation and Usage
```bash
npm install --save @datafire/azure_automation_linkedworkspace
```
```js
let azure_automation_linkedworkspace = require('@datafire/azure_automation_linkedworkspace').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_automation_linkedworkspace.LinkedWorkspace_Get({
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

### LinkedWorkspace_Get
Retrieve the linked workspace for the account id.


```js
azure_automation_linkedworkspace.LinkedWorkspace_Get({
  "resourceGroupName": "",
  "automationAccountName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The automation account name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the linked workspace.
  * id `string`: Gets the id of the linked workspace.



## Definitions

*This integration has no definitions*
