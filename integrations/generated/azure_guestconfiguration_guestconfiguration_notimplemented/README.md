# @datafire/azure_guestconfiguration_guestconfiguration_notimplemented

Client library for GuestConfiguration

## Installation and Usage
```bash
npm install --save @datafire/azure_guestconfiguration_guestconfiguration_notimplemented
```
```js
let azure_guestconfiguration_guestconfiguration_notimplemented = require('@datafire/azure_guestconfiguration_guestconfiguration_notimplemented').create({
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

### GuestConfigurationAssignments_Delete
Delete a guest configuration assignment


```js
azure_guestconfiguration_guestconfiguration_notimplemented.GuestConfigurationAssignments_Delete({
  "resourceGroupName": "",
  "guestConfigurationAssignmentName": "",
  "subscriptionId": "",
  "vmName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * guestConfigurationAssignmentName **required** `string`: Name of the guest configuration assignment
  * subscriptionId **required** `string`: Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * vmName **required** `string`: The name of the virtual machine.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
