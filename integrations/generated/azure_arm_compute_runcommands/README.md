# @datafire/azure_arm_compute_runcommands

Client library for RunCommandsClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_compute_runcommands
```
```js
let azure_arm_compute_runcommands = require('@datafire/azure_arm_compute_runcommands').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
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

#### Input
* input `object`
  * location **required** `string`: The location upon which run commands is queried.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RunCommandListResult](#runcommandlistresult)

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

#### Input
* input `object`
  * location **required** `string`: The location upon which run commands is queried.
  * commandId **required** `string`: The command id.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RunCommandDocument](#runcommanddocument)

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

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * vmName **required** `string`: The name of the virtual machine.
  * parameters **required** [RunCommandInput](#runcommandinput)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RunCommandResult](#runcommandresult)



## Definitions

### ApiError
* ApiError `object`: Api error.
  * code `string`: The error code.
  * details `array`: The Api error details
    * items [ApiErrorBase](#apierrorbase)
  * innererror [InnerError](#innererror)
  * message `string`: The error message.
  * target `string`: The target of the particular error.

### ApiErrorBase
* ApiErrorBase `object`: Api error base.
  * code `string`: The error code.
  * message `string`: The error message.
  * target `string`: The target of the particular error.

### InnerError
* InnerError `object`: Inner error details.
  * errordetail `string`: The internal error message or exception dump.
  * exceptiontype `string`: The exception type.

### OperationStatusResponse
* OperationStatusResponse `object`: Operation status response
  * endTime `string`: End time of the operation
  * error [ApiError](#apierror)
  * name `string`: Operation ID
  * startTime `string`: Start time of the operation
  * status `string`: Operation status

### RunCommandDocument
* RunCommandDocument `object`: Describes the properties of a Run Command.
  * parameters `array`: The parameters used by the script.
    * items [RunCommandParameterDefinition](#runcommandparameterdefinition)
  * script **required** `array`: The script to be executed.
    * items `string`
  * $schema **required** `string`: The VM run command schema.
  * description **required** `string`: The VM run command description.
  * id **required** `string`: The VM run command id.
  * label **required** `string`: The VM run command label.
  * osType **required** `string` (values: Windows, Linux): The Operating System type.

### RunCommandDocumentBase
* RunCommandDocumentBase `object`: Describes the properties of a Run Command metadata.
  * $schema **required** `string`: The VM run command schema.
  * description **required** `string`: The VM run command description.
  * id **required** `string`: The VM run command id.
  * label **required** `string`: The VM run command label.
  * osType **required** `string` (values: Windows, Linux): The Operating System type.

### RunCommandInput
* RunCommandInput `object`: Capture Virtual Machine parameters.
  * commandId **required** `string`: The run command id.
  * parameters `array`: The run command parameters.
    * items [RunCommandInputParameter](#runcommandinputparameter)
  * script `array`: Optional. The script to be executed.  When this value is given, the given script will override the default script of the command.
    * items `string`

### RunCommandInputParameter
* RunCommandInputParameter `object`: Describes the properties of a run command parameter.
  * name **required** `string`: The run command parameter name.
  * value **required** `string`: The run command parameter value.

### RunCommandListResult
* RunCommandListResult `object`: The List Virtual Machine operation response.
  * nextLink `string`: The uri to fetch the next page of run commands. Call ListNext() with this to fetch the next page of run commands.
  * value **required** `array`: The list of virtual machine run commands.
    * items [RunCommandDocumentBase](#runcommanddocumentbase)

### RunCommandParameterDefinition
* RunCommandParameterDefinition `object`: Describes the properties of a run command parameter.
  * defaultValue `string`: The run command parameter default value.
  * name **required** `string`: The run command parameter name.
  * required `boolean`: The run command parameter required.
  * type **required** `string`: The run command parameter type.

### RunCommandResult
* RunCommandResult `object`: Run command operation response.
  * properties [RunCommandResultProperties](#runcommandresultproperties)
  * endTime `string`: End time of the operation
  * error [ApiError](#apierror)
  * name `string`: Operation ID
  * startTime `string`: Start time of the operation
  * status `string`: Operation status

### RunCommandResultProperties
* RunCommandResultProperties `object`: Compute-specific operation properties, including output
  * output `object`: Operation output data (raw JSON)


