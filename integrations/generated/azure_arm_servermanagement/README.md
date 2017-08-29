# @datafire/azure_arm_servermanagement

Client library for ServerManagement

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_servermanagement
```

```js
let datafire = require('datafire');
let azure_arm_servermanagement = require('@datafire/azure_arm_servermanagement').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

azure_arm_servermanagement.Gateway_List({}).then(data => {
  console.log(data);
})
```

## Description
REST API for Azure Server Management Service.

## Actions
### Gateway_List
Returns gateways in a subscription.


```js
azure_arm_servermanagement.Gateway_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client API Version.

### Node_List
Lists nodes in a subscription.


```js
azure_arm_servermanagement.Node_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client API Version.

### Gateway_ListForResourceGroup
Returns gateways in a resource group.


```js
azure_arm_servermanagement.Gateway_ListForResourceGroup({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client API Version.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscriptionId.

### Gateway_Delete
Deletes a gateway from a resource group.


```js
azure_arm_servermanagement.Gateway_Delete({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "gatewayName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client API Version.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscriptionId.
* gatewayName (string) **required** - The gateway name (256 characters maximum).

### Gateway_Get
Gets a gateway.


```js
azure_arm_servermanagement.Gateway_Get({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "gatewayName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client API Version.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscriptionId.
* gatewayName (string) **required** - The gateway name (256 characters maximum)
* $expand (string) - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Gateway_Update
Updates a gateway belonging to a resource group.


```js
azure_arm_servermanagement.Gateway_Update({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "gatewayName": "",
  "GatewayParameters": null
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client API Version.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscriptionId.
* gatewayName (string) **required** - The gateway name (256 characters maximum).
* GatewayParameters (undefined) **required** - Collection of parameters for operations on a gateway resource.

### Gateway_Create
Creates or updates a ManagementService gateway.


```js
azure_arm_servermanagement.Gateway_Create({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "gatewayName": "",
  "GatewayParameters": null
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client API Version.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscriptionId.
* gatewayName (string) **required** - The gateway name (256 characters maximum).
* GatewayParameters (undefined) **required** - Collection of parameters for operations on a gateway resource.

### Gateway_GetProfile
Gets a gateway profile.


```js
azure_arm_servermanagement.Gateway_GetProfile({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "gatewayName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client API Version.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscriptionId.
* gatewayName (string) **required** - The gateway name (256 characters maximum).

### Gateway_RegenerateProfile
Regenerate a gateway's profile


```js
azure_arm_servermanagement.Gateway_RegenerateProfile({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "gatewayName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client API Version.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscriptionId.
* gatewayName (string) **required** - The gateway name (256 characters maximum).

### Gateway_Upgrade
Upgrades a gateway.


```js
azure_arm_servermanagement.Gateway_Upgrade({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "gatewayName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client API Version.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscriptionId.
* gatewayName (string) **required** - The gateway name (256 characters maximum).

### Node_ListForResourceGroup
Lists nodes in a resource group.


```js
azure_arm_servermanagement.Node_ListForResourceGroup({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client API Version.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscriptionId.

### Node_Delete
deletes a management node


```js
azure_arm_servermanagement.Node_Delete({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "nodeName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client API Version.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscriptionId.
* nodeName (string) **required** - The node name (256 characters maximum).

### Node_Get
Gets a management node.


```js
azure_arm_servermanagement.Node_Get({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "nodeName": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client API Version.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscriptionId.
* nodeName (string) **required** - The node name (256 characters maximum).

### Node_Update
Updates a management node.


```js
azure_arm_servermanagement.Node_Update({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "nodeName": "",
  "NodeParameters": null
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client API Version.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscriptionId.
* nodeName (string) **required** - The node name (256 characters maximum).
* NodeParameters (undefined) **required** - Parameter collection for operations on arm node resource.

### Node_Create
Creates or updates a management node.


```js
azure_arm_servermanagement.Node_Create({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "nodeName": "",
  "GatewayParameters": null
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client API Version.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscriptionId.
* nodeName (string) **required** - The node name (256 characters maximum).
* GatewayParameters (undefined) **required** - Parameter collection for operations on arm node resource.

### Session_Delete
Deletes a session for a node.


```js
azure_arm_servermanagement.Session_Delete({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "nodeName": "",
  "session": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client API Version.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscriptionId.
* nodeName (string) **required** - The node name (256 characters maximum).
* session (string) **required** - The sessionId from the user.

### Session_Get
Gets a session for a node.


```js
azure_arm_servermanagement.Session_Get({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "nodeName": "",
  "session": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client API Version.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscriptionId.
* nodeName (string) **required** - The node name (256 characters maximum).
* session (string) **required** - The sessionId from the user.

### Session_Create
Creates a session for a node.


```js
azure_arm_servermanagement.Session_Create({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "nodeName": "",
  "session": "",
  "SessionParameters": null
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client API Version.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscriptionId.
* nodeName (string) **required** - The node name (256 characters maximum).
* session (string) **required** - The sessionId from the user.
* SessionParameters (undefined) **required** - Parameter collection for creation and other operations on sessions.

### PowerShell_ListSession
Gets a list of the active sessions.


```js
azure_arm_servermanagement.PowerShell_ListSession({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "nodeName": "",
  "session": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client API Version.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscriptionId.
* nodeName (string) **required** - The node name (256 characters maximum).
* session (string) **required** - The sessionId from the user.

### PowerShell_GetCommandStatus
Gets the status of a command.


```js
azure_arm_servermanagement.PowerShell_GetCommandStatus({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "nodeName": "",
  "session": "",
  "pssession": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client API Version.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscriptionId.
* nodeName (string) **required** - The node name (256 characters maximum).
* session (string) **required** - The sessionId from the user.
* pssession (string) **required** - The PowerShell sessionId from the user.
* $expand (string) - Gets current output from an ongoing call.

### PowerShell_UpdateCommand
Updates a running PowerShell command with more data.


```js
azure_arm_servermanagement.PowerShell_UpdateCommand({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "nodeName": "",
  "session": "",
  "pssession": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client API Version.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscriptionId.
* nodeName (string) **required** - The node name (256 characters maximum).
* session (string) **required** - The sessionId from the user.
* pssession (string) **required** - The PowerShell sessionId from the user.

### PowerShell_CreateSession
Creates a PowerShell session.


```js
azure_arm_servermanagement.PowerShell_CreateSession({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "nodeName": "",
  "session": "",
  "pssession": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client API Version.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscriptionId.
* nodeName (string) **required** - The node name (256 characters maximum).
* session (string) **required** - The sessionId from the user.
* pssession (string) **required** - The PowerShell sessionId from the user.

### PowerShell_CancelCommand
Cancels a PowerShell command.


```js
azure_arm_servermanagement.PowerShell_CancelCommand({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "nodeName": "",
  "session": "",
  "pssession": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client API Version.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscriptionId.
* nodeName (string) **required** - The node name (256 characters maximum).
* session (string) **required** - The sessionId from the user.
* pssession (string) **required** - The PowerShell sessionId from the user.

### PowerShell_InvokeCommand
Creates a PowerShell script and invokes it.


```js
azure_arm_servermanagement.PowerShell_InvokeCommand({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "nodeName": "",
  "session": "",
  "pssession": "",
  "PowerShellCommandParameters": null
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client API Version.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscriptionId.
* nodeName (string) **required** - The node name (256 characters maximum).
* session (string) **required** - The sessionId from the user.
* pssession (string) **required** - The PowerShell sessionId from the user.
* PowerShellCommandParameters (undefined) **required** - The parameters to a PowerShell script execution command.

### PowerShell_TabCompletion
Gets tab completion values for a command.


```js
azure_arm_servermanagement.PowerShell_TabCompletion({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "nodeName": "",
  "session": "",
  "pssession": "",
  "PowerShellTabCompletionParamters": null
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* api-version (string) **required** - Client API Version.
* resourceGroupName (string) **required** - The resource group name uniquely identifies the resource group within the user subscriptionId.
* nodeName (string) **required** - The node name (256 characters maximum).
* session (string) **required** - The sessionId from the user.
* pssession (string) **required** - The PowerShell sessionId from the user.
* PowerShellTabCompletionParamters (undefined) **required** - Collection of parameters for PowerShell tab completion.

