# @datafire/azure_resources_deploymentscripts

Client library for DeploymentScriptsClient

## Installation and Usage
```bash
npm install --save @datafire/azure_resources_deploymentscripts
```
```js
let azure_resources_deploymentscripts = require('@datafire/azure_resources_deploymentscripts').create({
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

The APIs listed in this specification can be used to manage Deployment Scripts resource through the Azure Resource Manager.

## Actions

### DeploymentScripts_ListBySubscription
Lists all deployment scripts for a given subscription.


```js
azure_resources_deploymentscripts.DeploymentScripts_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id which forms part of the URI for every service call.
  * api-version **required** `string`: Client Api version.

#### Output
* output [DeploymentScriptListResult](#deploymentscriptlistresult)

### DeploymentScripts_ListByResourceGroup
Lists deployments scripts.


```js
azure_resources_deploymentscripts.DeploymentScripts_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id which forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * api-version **required** `string`: Client Api version.

#### Output
* output [DeploymentScriptListResult](#deploymentscriptlistresult)

### DeploymentScripts_Delete
Deletes a deployment script. When operation completes, status code 200 returned without content.


```js
azure_resources_deploymentscripts.DeploymentScripts_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "scriptName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id which forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * scriptName **required** `string`: Name of the deployment script.
  * api-version **required** `string`: Client Api version.

#### Output
*Output schema unknown*

### DeploymentScripts_Get
Gets a deployment script with a given name.


```js
azure_resources_deploymentscripts.DeploymentScripts_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "scriptName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id which forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * scriptName **required** `string`: Name of the deployment script.
  * api-version **required** `string`: Client Api version.

#### Output
* output [DeploymentScript](#deploymentscript)

### DeploymentScripts_Update
Updates deployment script tags with specified values.


```js
azure_resources_deploymentscripts.DeploymentScripts_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "scriptName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id which forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * scriptName **required** `string`: Name of the deployment script.
  * api-version **required** `string`: Client Api version.
  * deploymentScript [DeploymentScriptUpdateParameter](#deploymentscriptupdateparameter)

#### Output
* output [DeploymentScript](#deploymentscript)

### DeploymentScripts_Create
Creates a deployment script.


```js
azure_resources_deploymentscripts.DeploymentScripts_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "scriptName": "",
  "api-version": "",
  "deploymentScript": {
    "identity": {},
    "location": "",
    "kind": ""
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id which forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * scriptName **required** `string`: Name of the deployment script.
  * api-version **required** `string`: Client Api version.
  * deploymentScript **required** [DeploymentScript](#deploymentscript)

#### Output
* output [DeploymentScript](#deploymentscript)

### DeploymentScripts_GetLogs
Gets deployment script logs for a given deployment script name.


```js
azure_resources_deploymentscripts.DeploymentScripts_GetLogs({
  "subscriptionId": "",
  "resourceGroupName": "",
  "scriptName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id which forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * scriptName **required** `string`: Name of the deployment script.
  * api-version **required** `string`: Client Api version.

#### Output
* output [ScriptLogsList](#scriptlogslist)

### DeploymentScripts_GetLogsDefault
Gets deployment script logs for a given deployment script name.


```js
azure_resources_deploymentscripts.DeploymentScripts_GetLogsDefault({
  "subscriptionId": "",
  "resourceGroupName": "",
  "scriptName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription Id which forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * scriptName **required** `string`: Name of the deployment script.
  * api-version **required** `string`: Client Api version.

#### Output
* output [ScriptLog](#scriptlog)



## Definitions

### AzureCliScript
* AzureCliScript `object`: Object model for the Azure CLI script.
  * properties **required** [AzureCliScriptProperties](#azurecliscriptproperties)
  * identity **required** [ManagedServiceIdentity](#managedserviceidentity)
  * kind **required** `string` (values: AzurePowerShell, AzureCLI): Type of the script.
  * location **required** `string`: The location of the ACI and the storage account for the deployment script.
  * tags `object`: Resource tags.
  * id `string`: String Id used to locate any resource on Azure.
  * name `string`: Name of this resource.
  * type `string`: Type of this resource.

### AzureCliScriptProperties
* AzureCliScriptProperties `object`: Properties of the Azure CLI script object.
  * azCliVersion **required** `string`: Azure CLI module version to be used.
  * cleanupPreference `string` (values: Always, OnSuccess, OnExpiration): The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'.
  * outputs `object`: List of script outputs.
  * provisioningState `string` (values: Creating, ProvisioningResources, Running, Succeeded, Failed, Canceled): State of the script execution. This only appears in the response.
  * status [ScriptStatus](#scriptstatus)
  * arguments `string`: Command line arguments to pass to the script. Arguments are separated by spaces. ex: -Name blue* -Location 'West US 2' 
  * environmentVariables `array`: The environment variables to pass over to the script.
    * items [EnvironmentVariable](#environmentvariable)
  * forceUpdateTag `string`: Gets or sets how the deployment script should be forced to execute even if the script resource has not changed. Can be current time stamp or a GUID.
  * primaryScriptUri `string`: Uri for the script. This is the entry point for the external script.
  * retentionInterval **required** `string`: Interval for which the service retains the script resource after it reaches a terminal state. Resource will be deleted when this duration expires. Duration is based on ISO 8601 pattern (for example P7D means one week).
  * scriptContent `string`: Script body.
  * supportingScriptUris `array`: Supporting files for the external script.
    * items `string`: Supporting file Uri.
  * timeout `string`: Maximum allowed script execution time specified in ISO 8601 format. Default value is PT1H

### AzurePowerShellScript
* AzurePowerShellScript `object`: Object model for the Azure PowerShell script.
  * properties **required** [AzurePowerShellScriptProperties](#azurepowershellscriptproperties)
  * identity **required** [ManagedServiceIdentity](#managedserviceidentity)
  * kind **required** `string` (values: AzurePowerShell, AzureCLI): Type of the script.
  * location **required** `string`: The location of the ACI and the storage account for the deployment script.
  * tags `object`: Resource tags.
  * id `string`: String Id used to locate any resource on Azure.
  * name `string`: Name of this resource.
  * type `string`: Type of this resource.

### AzurePowerShellScriptProperties
* AzurePowerShellScriptProperties `object`: Properties of the Azure PowerShell script object.
  * azPowerShellVersion **required** `string`: Azure PowerShell module version to be used.
  * cleanupPreference `string` (values: Always, OnSuccess, OnExpiration): The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'.
  * outputs `object`: List of script outputs.
  * provisioningState `string` (values: Creating, ProvisioningResources, Running, Succeeded, Failed, Canceled): State of the script execution. This only appears in the response.
  * status [ScriptStatus](#scriptstatus)
  * arguments `string`: Command line arguments to pass to the script. Arguments are separated by spaces. ex: -Name blue* -Location 'West US 2' 
  * environmentVariables `array`: The environment variables to pass over to the script.
    * items [EnvironmentVariable](#environmentvariable)
  * forceUpdateTag `string`: Gets or sets how the deployment script should be forced to execute even if the script resource has not changed. Can be current time stamp or a GUID.
  * primaryScriptUri `string`: Uri for the script. This is the entry point for the external script.
  * retentionInterval **required** `string`: Interval for which the service retains the script resource after it reaches a terminal state. Resource will be deleted when this duration expires. Duration is based on ISO 8601 pattern (for example P7D means one week).
  * scriptContent `string`: Script body.
  * supportingScriptUris `array`: Supporting files for the external script.
    * items `string`: Supporting file Uri.
  * timeout `string`: Maximum allowed script execution time specified in ISO 8601 format. Default value is PT1H

### AzureResourceBase
* AzureResourceBase `object`: Common properties for all Azure resources.
  * id `string`: String Id used to locate any resource on Azure.
  * name `string`: Name of this resource.
  * type `string`: Type of this resource.

### DefaultErrorResponse
* DefaultErrorResponse `object`: The details of the error.
  * code `string`: One of a server-defined set of error codes.
  * details `array`: Detailed errors.
    * items [DefaultErrorResponse](#defaulterrorresponse)
  * message `string`: A human-readable representation of the error.
  * target `string`: The target of the particular error.

### DeploymentScript
* DeploymentScript `object`: Deployment script object.
  * identity **required** [ManagedServiceIdentity](#managedserviceidentity)
  * kind **required** `string` (values: AzurePowerShell, AzureCLI): Type of the script.
  * location **required** `string`: The location of the ACI and the storage account for the deployment script.
  * tags `object`: Resource tags.
  * id `string`: String Id used to locate any resource on Azure.
  * name `string`: Name of this resource.
  * type `string`: Type of this resource.

### DeploymentScriptListResult
* DeploymentScriptListResult `object`: List of deployment scripts.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: An array of deployment scripts.
    * items [DeploymentScript](#deploymentscript)

### DeploymentScriptPropertiesBase
* DeploymentScriptPropertiesBase `object`: Common properties for the deployment script.
  * cleanupPreference `string` (values: Always, OnSuccess, OnExpiration): The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'.
  * outputs `object`: List of script outputs.
  * provisioningState `string` (values: Creating, ProvisioningResources, Running, Succeeded, Failed, Canceled): State of the script execution. This only appears in the response.
  * status [ScriptStatus](#scriptstatus)

### DeploymentScriptUpdateParameter
* DeploymentScriptUpdateParameter `object`: Deployment script parameters to be updated. 
  * tags `object`: Resource tags to be updated.
  * id `string`: String Id used to locate any resource on Azure.
  * name `string`: Name of this resource.
  * type `string`: Type of this resource.

### EnvironmentVariable
* EnvironmentVariable `object`: The environment variable to pass to the script in the container instance.
  * name **required** `string`: The name of the environment variable.
  * secureValue `string`: The value of the secure environment variable.
  * value `string`: The value of the environment variable.

### LogProperties
* LogProperties `object`: Script log properties.
  * log `string`: Script execution logs in text format.

### ManagedServiceIdentity
* ManagedServiceIdentity `object`: Managed identity generic object.
  * type `string` (values: UserAssigned): Type of the managed identity.
  * userAssignedIdentities `object`: The list of user-assigned managed identities associated with the resource. Key is the Azure resource Id of the managed identity.

### ScriptConfigurationBase
* ScriptConfigurationBase `object`: Common configuration settings for both Azure PowerShell and Azure CLI scripts.
  * arguments `string`: Command line arguments to pass to the script. Arguments are separated by spaces. ex: -Name blue* -Location 'West US 2' 
  * environmentVariables `array`: The environment variables to pass over to the script.
    * items [EnvironmentVariable](#environmentvariable)
  * forceUpdateTag `string`: Gets or sets how the deployment script should be forced to execute even if the script resource has not changed. Can be current time stamp or a GUID.
  * primaryScriptUri `string`: Uri for the script. This is the entry point for the external script.
  * retentionInterval **required** `string`: Interval for which the service retains the script resource after it reaches a terminal state. Resource will be deleted when this duration expires. Duration is based on ISO 8601 pattern (for example P7D means one week).
  * scriptContent `string`: Script body.
  * supportingScriptUris `array`: Supporting files for the external script.
    * items `string`: Supporting file Uri.
  * timeout `string`: Maximum allowed script execution time specified in ISO 8601 format. Default value is PT1H

### ScriptLog
* ScriptLog `object`: Script execution log object.
  * properties [LogProperties](#logproperties)
  * id `string`: String Id used to locate any resource on Azure.
  * name `string`: Name of this resource.
  * type `string`: Type of this resource.

### ScriptLogsList
* ScriptLogsList `object`: Deployment script execution logs.
  * value `array`: Deployment scripts logs.
    * items [ScriptLog](#scriptlog)

### ScriptStatus
* ScriptStatus `object`: Generic object modeling results of script execution.
  * containerInstanceId `string`: ACI resource Id.
  * endTime `string`: End time of the script execution.
  * error [DefaultErrorResponse](#defaulterrorresponse)
  * expirationTime `string`: Time the deployment script resource will expire.
  * startTime `string`: Start time of the script execution.
  * storageAccountId `string`: Storage account resource Id.

### UserAssignedIdentity
* UserAssignedIdentity `object`: User-assigned managed identity.
  * clientId `string`: Client App Id associated with this identity.
  * principalId `string`: Azure Active Directory principal ID associated with this identity.


