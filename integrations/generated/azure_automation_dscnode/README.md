# @datafire/azure_automation_dscnode

Client library for AutomationManagement

## Installation and Usage
```bash
npm install --save @datafire/azure_automation_dscnode
```
```js
let azure_automation_dscnode = require('@datafire/azure_automation_dscnode').create({
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

### AgentRegistrationInformation_Get
Retrieve the automation agent registration information.


```js
azure_automation_dscnode.AgentRegistrationInformation_Get({
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

#### Output
* output [AgentRegistration](#agentregistration)

### AgentRegistrationInformation_RegenerateKey
Regenerate a primary or secondary agent registration key


```js
azure_automation_dscnode.AgentRegistrationInformation_RegenerateKey({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * parameters **required** [AgentRegistrationRegenerateKeyParameter](#agentregistrationregeneratekeyparameter)
  * api-version **required** `string`: Client Api Version.

#### Output
* output [AgentRegistration](#agentregistration)

### DscNode_ListByAutomationAccount
Retrieve a list of dsc nodes.


```js
azure_automation_dscnode.DscNode_ListByAutomationAccount({
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
  * $skip `integer`: The number of rows to skip.
  * $top `integer`: The number of rows to take.
  * $inlinecount `string`: Return total rows.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DscNodeListResult](#dscnodelistresult)

### DscNode_Delete
Delete the dsc node identified by node id.


```js
azure_automation_dscnode.DscNode_Delete({
  "resourceGroupName": "",
  "automationAccountName": "",
  "nodeId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * nodeId **required** `string`: The node id.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DscNode](#dscnode)

### DscNode_Get
Retrieve the dsc node identified by node id.


```js
azure_automation_dscnode.DscNode_Get({
  "resourceGroupName": "",
  "automationAccountName": "",
  "nodeId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * nodeId **required** `string`: The node id.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DscNode](#dscnode)

### DscNode_Update
Update the dsc node.


```js
azure_automation_dscnode.DscNode_Update({
  "resourceGroupName": "",
  "automationAccountName": "",
  "nodeId": "",
  "dscNodeUpdateParameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * nodeId **required** `string`: Parameters supplied to the update dsc node.
  * dscNodeUpdateParameters **required** [DscNodeUpdateParameters](#dscnodeupdateparameters)
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DscNode](#dscnode)

### NodeReports_ListByNode
Retrieve the Dsc node report list by node id.


```js
azure_automation_dscnode.NodeReports_ListByNode({
  "resourceGroupName": "",
  "automationAccountName": "",
  "nodeId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * nodeId **required** `string`: The parameters supplied to the list operation.
  * $filter `string`: The filter to apply on the operation.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DscNodeReportListResult](#dscnodereportlistresult)

### NodeReports_Get
Retrieve the Dsc node report data by node id and report id.


```js
azure_automation_dscnode.NodeReports_Get({
  "resourceGroupName": "",
  "automationAccountName": "",
  "nodeId": "",
  "reportId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * nodeId **required** `string`: The Dsc node id.
  * reportId **required** `string`: The report id.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [DscNodeReport](#dscnodereport)

### NodeReports_GetContent
Retrieve the Dsc node reports by node id and report id.


```js
azure_automation_dscnode.NodeReports_GetContent({
  "resourceGroupName": "",
  "automationAccountName": "",
  "nodeId": "",
  "reportId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * nodeId **required** `string`: The Dsc node id.
  * reportId **required** `string`: The report id.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`



## Definitions

### AgentRegistration
* AgentRegistration `object`: Definition of the agent registration information type.
  * dscMetaConfiguration `string`: Gets or sets the dsc meta configuration.
  * endpoint `string`: Gets or sets the dsc server endpoint.
  * id `string`: Gets or sets the id.
  * keys [AgentRegistrationKeys](#agentregistrationkeys)

### AgentRegistrationKeys
* AgentRegistrationKeys `object`: Definition of the agent registration keys.
  * primary `string`: Gets or sets the primary key.
  * secondary `string`: Gets or sets the secondary key.

### AgentRegistrationRegenerateKeyParameter
* AgentRegistrationRegenerateKeyParameter `object`: The parameters supplied to the regenerate keys operation.
  * keyName **required** `string` (values: primary, secondary): Gets or sets the agent registration key name - primary or secondary.

### DscMetaConfiguration
* DscMetaConfiguration `object`: Definition of the DSC Meta Configuration.
  * actionAfterReboot `string`: Gets or sets the ActionAfterReboot value of the meta configuration.
  * allowModuleOverwrite `boolean`: Gets or sets the AllowModuleOverwrite value of the meta configuration.
  * certificateId `string`: Gets or sets the CertificateId value of the meta configuration.
  * configurationMode `string`: Gets or sets the ConfigurationMode value of the meta configuration.
  * configurationModeFrequencyMins `integer`: Gets or sets the ConfigurationModeFrequencyMins value of the meta configuration.
  * rebootNodeIfNeeded `boolean`: Gets or sets the RebootNodeIfNeeded value of the meta configuration.
  * refreshFrequencyMins `integer`: Gets or sets the RefreshFrequencyMins value of the meta configuration.

### DscNode
* DscNode `object`: Definition of a DscNode
  * properties [DscNodeProperties](#dscnodeproperties)
  * id `string`: Fully qualified resource Id for the resource
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### DscNodeConfigurationAssociationProperty
* DscNodeConfigurationAssociationProperty `object`: The dsc node configuration property associated with the entity.
  * name `string`: Gets or sets the name of the dsc node configuration.

### DscNodeExtensionHandlerAssociationProperty
* DscNodeExtensionHandlerAssociationProperty `object`: The dsc extensionHandler property associated with the node
  * name `string`: Gets or sets the name of the extension handler.
  * version `string`: Gets or sets the version of the extension handler.

### DscNodeListResult
* DscNodeListResult `object`: The response model for the list dsc nodes operation.
  * nextLink `string`: Gets or sets the next link.
  * totalCount `integer`: Gets the total number of nodes matching filter criteria.
  * value `array`: Gets or sets a list of dsc nodes.
    * items [DscNode](#dscnode)

### DscNodeProperties
* DscNodeProperties `object`: The properties of a DscNode
  * accountId `string`: Gets or sets the account id of the node.
  * etag `string`: Gets or sets the etag of the resource.
  * extensionHandler `array`: Gets or sets the list of extensionHandler properties for a Node.
    * items [DscNodeExtensionHandlerAssociationProperty](#dscnodeextensionhandlerassociationproperty)
  * ip `string`: Gets or sets the ip of the node.
  * lastSeen `string`: Gets or sets the last seen time of the node.
  * nodeConfiguration [DscNodeConfigurationAssociationProperty](#dscnodeconfigurationassociationproperty)
  * nodeId `string`: Gets or sets the node id.
  * registrationTime `string`: Gets or sets the registration time of the node.
  * status `string`: Gets or sets the status of the node.
  * totalCount `integer`: Gets the total number of records matching filter criteria.

### DscNodeReport
* DscNodeReport `object`: Definition of the dsc node report type.
  * configurationVersion `string`: Gets or sets the configurationVersion of the node report.
  * endTime `string`: Gets or sets the end time of the node report.
  * errors `array`: Gets or sets the errors for the node report.
    * items [DscReportError](#dscreporterror)
  * hostName `string`: Gets or sets the hostname of the node that sent the report.
  * iPV4Addresses `array`: Gets or sets the IPv4 address of the node that sent the report.
    * items `string`
  * iPV6Addresses `array`: Gets or sets the IPv6 address of the node that sent the report.
    * items `string`
  * id `string`: Gets or sets the id.
  * lastModifiedTime `string`: Gets or sets the lastModifiedTime of the node report.
  * metaConfiguration [DscMetaConfiguration](#dscmetaconfiguration)
  * numberOfResources `integer`: Gets or sets the number of resource in the node report.
  * rawErrors `string`: Gets or sets the unparsed errors for the node report.
  * rebootRequested `string`: Gets or sets the rebootRequested of the node report.
  * refreshMode `string`: Gets or sets the refreshMode of the node report.
  * reportFormatVersion `string`: Gets or sets the reportFormatVersion of the node report.
  * reportId `string`: Gets or sets the id of the node report.
  * resources `array`: Gets or sets the resource for the node report.
    * items [DscReportResource](#dscreportresource)
  * startTime `string`: Gets or sets the start time of the node report.
  * status `string`: Gets or sets the status of the node report.
  * type `string`: Gets or sets the type of the node report.

### DscNodeReportListResult
* DscNodeReportListResult `object`: The response model for the list dsc nodes operation.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: Gets or sets a list of dsc node reports.
    * items [DscNodeReport](#dscnodereport)

### DscNodeUpdateParameters
* DscNodeUpdateParameters `object`: The parameters supplied to the update dsc node operation.
  * nodeId `string`: Gets or sets the id of the dsc node.
  * properties `object`
    * nodeConfiguration [DscNodeConfigurationAssociationProperty](#dscnodeconfigurationassociationproperty)

### DscReportError
* DscReportError `object`: Definition of the dsc node report error type.
  * errorCode `string`: Gets or sets the error code.
  * errorDetails `string`: Gets or sets the error details.
  * errorMessage `string`: Gets or sets the error message.
  * errorSource `string`: Gets or sets the source of the error.
  * locale `string`: Gets or sets the locale of the error.
  * resourceId `string`: Gets or sets the resource ID which generated the error.

### DscReportResource
* DscReportResource `object`: Definition of the DSC Report Resource.
  * dependsOn `array`: Gets or sets the Resource Navigation values for resources the resource depends on.
    * items [DscReportResourceNavigation](#dscreportresourcenavigation)
  * durationInSeconds `number`: Gets or sets the duration in seconds for the resource.
  * error `string`: Gets or sets the error of the resource.
  * moduleName `string`: Gets or sets the module name of the resource.
  * moduleVersion `string`: Gets or sets the module version of the resource.
  * resourceId `string`: Gets or sets the ID of the resource.
  * resourceName `string`: Gets or sets the name of the resource.
  * sourceInfo `string`: Gets or sets the source info of the resource.
  * startDate `string`: Gets or sets the start date of the resource.
  * status `string`: Gets or sets the status of the resource.

### DscReportResourceNavigation
* DscReportResourceNavigation `object`: Navigation for DSC Report Resource.
  * resourceId `string`: Gets or sets the ID of the resource to navigate to.


