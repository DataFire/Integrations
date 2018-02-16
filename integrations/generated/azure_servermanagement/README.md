# @datafire/azure_servermanagement

Client library for ServerManagement

## Installation and Usage
```bash
npm install --save @datafire/azure_servermanagement
```
```js
let azure_servermanagement = require('@datafire/azure_servermanagement').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_servermanagement.Gateway_List({
  "subscriptionId": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

REST API for Azure Server Management Service.

## Actions

### Gateway_List
Returns gateways in a subscription.


```js
azure_servermanagement.Gateway_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
* output [GatewayResources](#gatewayresources)

### Node_List
Lists nodes in a subscription.


```js
azure_servermanagement.Node_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.

#### Output
* output [NodeResources](#noderesources)

### Gateway_ListForResourceGroup
Returns gateways in a resource group.


```js
azure_servermanagement.Gateway_ListForResourceGroup({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscriptionId.

#### Output
* output [GatewayResources](#gatewayresources)

### Gateway_Delete
Deletes a gateway from a resource group.


```js
azure_servermanagement.Gateway_Delete({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "gatewayName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscriptionId.
  * gatewayName **required** `string`: The gateway name (256 characters maximum).

#### Output
*Output schema unknown*

### Gateway_Get
Gets a gateway.


```js
azure_servermanagement.Gateway_Get({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "gatewayName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscriptionId.
  * gatewayName **required** `string`: The gateway name (256 characters maximum)
  * $expand `string` (values: status, download): Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [GatewayResource](#gatewayresource)

### Gateway_Update
Updates a gateway belonging to a resource group.


```js
azure_servermanagement.Gateway_Update({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "gatewayName": "",
  "GatewayParameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscriptionId.
  * gatewayName **required** `string`: The gateway name (256 characters maximum).
  * GatewayParameters **required** [GatewayParameters](#gatewayparameters)

#### Output
* output [GatewayResource](#gatewayresource)

### Gateway_Create
Creates or updates a ManagementService gateway.


```js
azure_servermanagement.Gateway_Create({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "gatewayName": "",
  "GatewayParameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscriptionId.
  * gatewayName **required** `string`: The gateway name (256 characters maximum).
  * GatewayParameters **required** [GatewayParameters](#gatewayparameters)

#### Output
* output [GatewayResource](#gatewayresource)

### Gateway_GetProfile
Gets a gateway profile.


```js
azure_servermanagement.Gateway_GetProfile({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "gatewayName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscriptionId.
  * gatewayName **required** `string`: The gateway name (256 characters maximum).

#### Output
* output [GatewayProfile](#gatewayprofile)

### Gateway_RegenerateProfile
Regenerate a gateway's profile


```js
azure_servermanagement.Gateway_RegenerateProfile({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "gatewayName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscriptionId.
  * gatewayName **required** `string`: The gateway name (256 characters maximum).

#### Output
*Output schema unknown*

### Gateway_Upgrade
Upgrades a gateway.


```js
azure_servermanagement.Gateway_Upgrade({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "gatewayName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscriptionId.
  * gatewayName **required** `string`: The gateway name (256 characters maximum).

#### Output
*Output schema unknown*

### Node_ListForResourceGroup
Lists nodes in a resource group.


```js
azure_servermanagement.Node_ListForResourceGroup({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscriptionId.

#### Output
* output [NodeResources](#noderesources)

### Node_Delete
deletes a management node


```js
azure_servermanagement.Node_Delete({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "nodeName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscriptionId.
  * nodeName **required** `string`: The node name (256 characters maximum).

#### Output
*Output schema unknown*

### Node_Get
Gets a management node.


```js
azure_servermanagement.Node_Get({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "nodeName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscriptionId.
  * nodeName **required** `string`: The node name (256 characters maximum).

#### Output
* output [NodeResource](#noderesource)

### Node_Update
Updates a management node.


```js
azure_servermanagement.Node_Update({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "nodeName": "",
  "NodeParameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscriptionId.
  * nodeName **required** `string`: The node name (256 characters maximum).
  * NodeParameters **required** [NodeParameters](#nodeparameters)

#### Output
* output [NodeResource](#noderesource)

### Node_Create
Creates or updates a management node.


```js
azure_servermanagement.Node_Create({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "nodeName": "",
  "GatewayParameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscriptionId.
  * nodeName **required** `string`: The node name (256 characters maximum).
  * GatewayParameters **required** [NodeParameters](#nodeparameters)

#### Output
* output [NodeResource](#noderesource)

### Session_Delete
Deletes a session for a node.


```js
azure_servermanagement.Session_Delete({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "nodeName": "",
  "session": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscriptionId.
  * nodeName **required** `string`: The node name (256 characters maximum).
  * session **required** `string`: The sessionId from the user.

#### Output
*Output schema unknown*

### Session_Get
Gets a session for a node.


```js
azure_servermanagement.Session_Get({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "nodeName": "",
  "session": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscriptionId.
  * nodeName **required** `string`: The node name (256 characters maximum).
  * session **required** `string`: The sessionId from the user.

#### Output
* output [SessionResource](#sessionresource)

### Session_Create
Creates a session for a node.


```js
azure_servermanagement.Session_Create({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "nodeName": "",
  "session": "",
  "SessionParameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscriptionId.
  * nodeName **required** `string`: The node name (256 characters maximum).
  * session **required** `string`: The sessionId from the user.
  * SessionParameters **required** [SessionParameters](#sessionparameters)

#### Output
* output [SessionResource](#sessionresource)

### PowerShell_ListSession
Gets a list of the active sessions.


```js
azure_servermanagement.PowerShell_ListSession({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "nodeName": "",
  "session": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscriptionId.
  * nodeName **required** `string`: The node name (256 characters maximum).
  * session **required** `string`: The sessionId from the user.

#### Output
* output [PowerShellSessionResources](#powershellsessionresources)

### PowerShell_GetCommandStatus
Gets the status of a command.


```js
azure_servermanagement.PowerShell_GetCommandStatus({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "nodeName": "",
  "session": "",
  "pssession": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscriptionId.
  * nodeName **required** `string`: The node name (256 characters maximum).
  * session **required** `string`: The sessionId from the user.
  * pssession **required** `string`: The PowerShell sessionId from the user.
  * $expand `string` (values: output): Gets current output from an ongoing call.

#### Output
* output [PowerShellCommandStatus](#powershellcommandstatus)

### PowerShell_UpdateCommand
Updates a running PowerShell command with more data.


```js
azure_servermanagement.PowerShell_UpdateCommand({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "nodeName": "",
  "session": "",
  "pssession": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscriptionId.
  * nodeName **required** `string`: The node name (256 characters maximum).
  * session **required** `string`: The sessionId from the user.
  * pssession **required** `string`: The PowerShell sessionId from the user.

#### Output
* output [PowerShellCommandResults](#powershellcommandresults)

### PowerShell_CreateSession
Creates a PowerShell session.


```js
azure_servermanagement.PowerShell_CreateSession({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "nodeName": "",
  "session": "",
  "pssession": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscriptionId.
  * nodeName **required** `string`: The node name (256 characters maximum).
  * session **required** `string`: The sessionId from the user.
  * pssession **required** `string`: The PowerShell sessionId from the user.

#### Output
* output [PowerShellSessionResource](#powershellsessionresource)

### PowerShell_CancelCommand
Cancels a PowerShell command.


```js
azure_servermanagement.PowerShell_CancelCommand({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "nodeName": "",
  "session": "",
  "pssession": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscriptionId.
  * nodeName **required** `string`: The node name (256 characters maximum).
  * session **required** `string`: The sessionId from the user.
  * pssession **required** `string`: The PowerShell sessionId from the user.

#### Output
* output [PowerShellCommandResults](#powershellcommandresults)

### PowerShell_InvokeCommand
Creates a PowerShell script and invokes it.


```js
azure_servermanagement.PowerShell_InvokeCommand({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "nodeName": "",
  "session": "",
  "pssession": "",
  "PowerShellCommandParameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscriptionId.
  * nodeName **required** `string`: The node name (256 characters maximum).
  * session **required** `string`: The sessionId from the user.
  * pssession **required** `string`: The PowerShell sessionId from the user.
  * PowerShellCommandParameters **required** [PowerShellCommandParameters](#powershellcommandparameters)

#### Output
* output [PowerShellCommandResults](#powershellcommandresults)

### PowerShell_TabCompletion
Gets tab completion values for a command.


```js
azure_servermanagement.PowerShell_TabCompletion({
  "subscriptionId": "",
  "api-version": "",
  "resourceGroupName": "",
  "nodeName": "",
  "session": "",
  "pssession": "",
  "PowerShellTabCompletionParamters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * resourceGroupName **required** `string`: The resource group name uniquely identifies the resource group within the user subscriptionId.
  * nodeName **required** `string`: The node name (256 characters maximum).
  * session **required** `string`: The sessionId from the user.
  * pssession **required** `string`: The PowerShell sessionId from the user.
  * PowerShellTabCompletionParamters **required** [PowerShellTabCompletionParameters](#powershelltabcompletionparameters)

#### Output
* output [PowerShellTabCompletionResults](#powershelltabcompletionresults)



## Definitions

### EncryptionJwkResource
* EncryptionJwkResource `object`: The public key of the gateway.
  * alg `string`
  * e `string`
  * kty `string`
  * n `string`

### Error
* Error `object`: Error message.
  * code `integer`
  * fields `string`
  * message `string`

### GatewayParameters
* GatewayParameters `object`: Collection of parameters for operations on a gateway resource.
  * location `string`: Location of the resource.
  * properties `object`: Collection of properties.
    * upgradeMode `string` (values: Manual, Automatic): The upgradeMode property gives the flexibility to gateway to auto upgrade itself. If properties value not specified, then we assume upgradeMode = Automatic.
  * tags `object`: Resource tags.

### GatewayProfile
* GatewayProfile `object`: JSON properties that the gateway service uses know how to communicate with the resource.
  * dataPlaneServiceBaseAddress `string`: The Dataplane connection URL.
  * environment `string`: The environment for the gateway (DEV, DogFood, or Production).
  * gatewayId `string`: The ID of the gateway.
  * messagingAccount `string`: Messaging Account.
  * messagingKey `string`: Messaging Key.
  * messagingNamespace `string`: Messaging namespace.
  * requestQueue `string`: Request queue name.
  * responseTopic `string`: Response topic name.
  * statusBlobSignature `string`: The gateway status blob SAS URL.
  * upgradeManifestUrl `string`: Gateway upgrade manifest URL.

### GatewayResource
* GatewayResource `object`: Data model for an arm gateway resource.
  * properties `object`: Collection of properties.
    * activeMessageCount `integer`: Number of active messages.
    * created `string`: UTC date and time when gateway was first added to management service.
    * desiredVersion `string`: Latest available MSI version.
    * installerDownload `string`: Installer download uri.
    * instances `array`: Names of the nodes in the gateway.
      * items [GatewayStatus](#gatewaystatus)
    * latestPublishedMsiVersion `string`: Last published MSI version.
    * minimumVersion `string`: Minimum gateway version.
    * publishedTimeUtc `string`: The date/time of the last published gateway.
    * updated `string`: UTC date and time when node was last updated.
    * upgradeMode `string` (values: Manual, Automatic): The upgradeMode property gives the flexibility to gateway to auto upgrade itself. If properties value not specified, then we assume upgradeMode = Automatic.
  * etag `string`
  * id `string`: Resource Manager Resource ID.
  * location `string`: Resource Manager Resource Location.
  * name `string`: Resource Manager Resource Name.
  * tags `object`: Resource Manager Resource Tags.
  * type `string`: Resource Manager Resource Type.

### GatewayResources
* GatewayResources `object`: Collection of Gateway Resources.
  * nextLink `string`: The URL to the next set of resources.
  * value `array`: Collection of Gateway Resources.
    * items [GatewayResource](#gatewayresource)

### GatewayStatus
* GatewayStatus `object`: Expanded gateway status information.
  * activeMessageCount `integer`: Active message count.
  * allowGatewayGroupPolicyStatus `boolean`: Status of the allowGatewayGroupPolicy setting.
  * availableMemoryMByte `number`: The available memory on the gateway host machine in megabytes.
  * encryptionCertificateThumbprint `string`: Thumbprint of the encryption certificate.
  * encryptionJwk [EncryptionJwkResource](#encryptionjwkresource)
  * friendlyOsName `string`: The Plaintext description of the OS on the gateway.
  * gatewayCpuUtilizationPercent `number`: The CPU utilization of the gateway process (numeric value between 0 and 100).
  * gatewayId `string`: The gateway resource ID.
  * gatewayVersion `string`: The version of the gateway that is installed on the system.
  * gatewayWorkingSetMByte `number`: The working set size of the gateway process in megabytes.
  * groupPolicyError `string`: The group policy error.
  * installedDate `string`: The date the gateway was installed.
  * latestPublishedMsiVersion `string`: Latest published version of the gateway install MSI.
  * logicalProcessorCount `integer`: Number of logical processors in the gateway system.
  * name `string`: The computer name of the gateway system.
  * publishedTimeUtc `string`: Gateway install MSI published time.
  * requireMfaGroupPolicyStatus `boolean`: Status of the requireMfaGroupPolicy setting.
  * secondaryEncryptionCertificateThumbprint `string`: Secondary thumbprint of the encryption certificate.
  * secondaryEncryptionJwk [EncryptionJwkResource](#encryptionjwkresource)
  * statusUpdated `string`: UTC date and time when gateway status was last updated.
  * totalCpuUtilizationPercent `number`: CPU Utilization of the whole system.

### NodeParameters
* NodeParameters `object`: Parameter collection for operations on arm node resource.
  * location `string`: Location of the resource.
  * properties `object`: Collection of properties.
    * connectionName `string`: myhost.domain.com
    * gatewayId `string`: Gateway ID which will manage this node.
    * password `string`: Password associated with user name.
    * userName `string`: User name to be used to connect to node.
  * tags `object`: Resource tags.

### NodeResource
* NodeResource `object`: A Node Resource.
  * properties `object`: Collection of properties.
    * connectionName `string`: myhost.domain.com
    * created `string`: UTC date and time when node was first added to management service.
    * gatewayId `string`: ID of the gateway.
    * updated `string`: UTC date and time when node was last updated.
  * etag `string`
  * id `string`: Resource Manager Resource ID.
  * location `string`: Resource Manager Resource Location.
  * name `string`: Resource Manager Resource Name.
  * tags `object`: Resource Manager Resource Tags.
  * type `string`: Resource Manager Resource Type.

### NodeResources
* NodeResources `object`: A collection of node resource objects.
  * nextLink `string`: The URL to the next set of resources.
  * value `array`: Collection of Node Resources.
    * items [NodeResource](#noderesource)

### PowerShellCommandParameters
* PowerShellCommandParameters `object`: The parameters to a PowerShell script execution command.
  * properties `object`: Collection of properties.
    * command `string`: Script to execute.

### PowerShellCommandResult
* PowerShellCommandResult `object`: Results from invoking a PowerShell command.
  * backgroundColor `string`: The HTML color string representing the background color.
  * caption `string`: Text that precedes the prompt.
  * descriptions `array`: Collection of PromptFieldDescription objects that contains the user input.
    * items [PromptFieldDescription](#promptfielddescription)
  * exitCode `integer`: The exit code from a executable that was called from PowerShell.
  * foregroundColor `string`: The HTML color string representing the foreground color.
  * id `integer`: ID of the prompt message.
  * message `string`: Text of the prompt.
  * messageType `integer`: The type of message.
  * prompt `string`: The interactive prompt message.
  * value `string`: Actual result text from the PowerShell Command.

### PowerShellCommandResults
* PowerShellCommandResults `object`: A collection of results from a PowerShell command.
  * command `string`
  * completed `boolean`
  * pssession `string`
  * results `array`
    * items [PowerShellCommandResult](#powershellcommandresult)

### PowerShellCommandStatus
* PowerShellCommandStatus `object`: Result status from invoking a PowerShell command.
  * properties [PowerShellCommandResults](#powershellcommandresults)
  * etag `string`
  * id `string`: Resource Manager Resource ID.
  * location `string`: Resource Manager Resource Location.
  * name `string`: Resource Manager Resource Name.
  * tags `object`: Resource Manager Resource Tags.
  * type `string`: Resource Manager Resource Type.

### PowerShellSessionResource
* PowerShellSessionResource `object`: A PowerShell session resource (practically equivalent to a runspace instance).
  * properties `object`: Collection of properties.
    * disconnectedOn `string`: Timestamp of last time the service disconnected from the runspace.
    * expiresOn `string`: Timestamp when the runspace expires.
    * name `string`: Name of the runspace.
    * runspaceAvailability `string`: The availability of the runspace.
    * sessionId `string`: The PowerShell Session ID.
    * state `string`: The runspace state.
    * version [Version](#version)
  * etag `string`
  * id `string`: Resource Manager Resource ID.
  * location `string`: Resource Manager Resource Location.
  * name `string`: Resource Manager Resource Name.
  * tags `object`: Resource Manager Resource Tags.
  * type `string`: Resource Manager Resource Type.

### PowerShellSessionResources
* PowerShellSessionResources `object`: A collection of PowerShell session resources
  * nextLink `string`: The URL to the next set of resources.
  * value `array`: Collection of PowerShell session resources.
    * items [PowerShellSessionResource](#powershellsessionresource)

### PowerShellTabCompletionParameters
* PowerShellTabCompletionParameters `object`: Collection of parameters for PowerShell tab completion.
  * command `string`: Command to get tab completion for.

### PowerShellTabCompletionResults
* PowerShellTabCompletionResults `object`: An array of strings representing the different values that can be selected through.
  * results `array`
    * items `string`

### PromptFieldDescription
* PromptFieldDescription `object`: Field description for the implementation of PSHostUserInterface.Prompt
  * helpMessage `string`: The help message of the prompt.
  * label `string`: The label text of the prompt.
  * name `string`: The name of the prompt.
  * promptFieldType `string` (values: String, SecureString, Credential)
  * promptFieldTypeIsList `boolean`: When set to 'true' the prompt field type is a list of values.

### PromptMessageResponse
* PromptMessageResponse `object`: The response to a prompt message.
  * response `array`: The list of responses a cmdlet expects.
    * items `string`

### Resource
* Resource `object`: Resource Manager Resource Information.
  * etag `string`
  * id `string`: Resource Manager Resource ID.
  * location `string`: Resource Manager Resource Location.
  * name `string`: Resource Manager Resource Name.
  * tags `object`: Resource Manager Resource Tags.
  * type `string`: Resource Manager Resource Type.

### SessionParameters
* SessionParameters `object`: Parameter collection for creation and other operations on sessions.
  * properties `object`: Collection of properties
    * EncryptionCertificateThumbprint `string`: Encryption certificate thumbprint.
    * credentialDataFormat `string` (values: RsaEncrypted): Credential data format.
    * password `string`: Encrypted Password associated with user name.
    * retentionPeriod `string` (values: Session, Persistent): Session retention period.
    * userName `string`: Encrypted User name to be used to connect to node.

### SessionResource
* SessionResource `object`: The session object.
  * properties `object`: Collection of properties.
    * created `string`: UTC date and time when node was first added to management service.
    * updated `string`: UTC date and time when node was last updated.
    * userName `string`: The username connecting to the session.
  * etag `string`
  * id `string`: Resource Manager Resource ID.
  * location `string`: Resource Manager Resource Location.
  * name `string`: Resource Manager Resource Name.
  * tags `object`: Resource Manager Resource Tags.
  * type `string`: Resource Manager Resource Type.

### Version
* Version `object`: A multipart-numeric version number.
  * build `integer`: The third number of the version.
  * major `integer`: The leftmost number of the version.
  * majorRevision `integer`: The MSW of the fourth part.
  * minor `integer`: The second leftmost number of the version.
  * minorRevision `integer`: The LSW of the fourth part.
  * revision `integer`: The fourth number of the version.


