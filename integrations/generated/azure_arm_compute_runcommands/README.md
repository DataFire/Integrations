# @datafire/azure_arm_compute_runcommands

Client library for RunCommandsClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_compute_runcommands
```

```js
let datafire = require('datafire');
let azure_arm_compute_runcommands = require('@datafire/azure_arm_compute_runcommands').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

azure_arm_compute_runcommands.VirtualMachineRunCommands_List({}).then(data => {
  console.log(data);
})
```

## Description
The Run Commands Client.

## Actions
### VirtualMachineRunCommands_List
Lists all available run commands for a subscription in a location.


```js
azure_arm_compute_runcommands.VirtualMachineRunCommands_List({
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* location (string) **required** - The location upon which run commands is queried.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### VirtualMachineRunCommands_Get
Gets specific run command for a subscription in a location.


```js
azure_arm_compute_runcommands.VirtualMachineRunCommands_Get({
  "location": "",
  "commandId": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* location (string) **required** - The location upon which run commands is queried.
* commandId (string) **required** - The command id.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### VirtualMachines_RunCommand
Run command on the VM.


```js
azure_arm_compute_runcommands.VirtualMachines_RunCommand({
  "resourceGroupName": "",
  "vmName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* vmName (string) **required** - The name of the virtual machine.
* parameters (undefined) **required** - Capture Virtual Machine parameters.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

