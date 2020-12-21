# @datafire/azure_guestconfiguration

Client library for GuestConfiguration

## Installation and Usage
```bash
npm install --save @datafire/azure_guestconfiguration
```
```js
let azure_guestconfiguration = require('@datafire/azure_guestconfiguration').create({
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

### Operations_List
Lists all of the available GuestConfiguration REST API operations.


```js
azure_guestconfiguration.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: The response model for the list of Automation operations
  * value `array`: List of Automation operations supported by the Automation resource provider.
    * items `object`: GuestConfiguration REST API operation
      * display `object`: Provider, Resource, Operation and description values.
        * description `string`: Description about operation.
        * operation `string`: Operation type: Read, write, delete, etc.
        * provider `string`: Service provider: Microsoft.GuestConfiguration
        * resource `string`: Resource on which the operation is performed:  For ex. 
      * name `string`: Operation name: For ex. providers/Microsoft.GuestConfiguration/guestConfigurationAssignments/write or read
      * properties `object`: Provider, Resource, Operation and description values.
        * statusCode `string`: Service provider: Microsoft.GuestConfiguration

### GuestConfigurationAssignments_List
List all guest configuration assignments for a virtual machine.


```js
azure_guestconfiguration.GuestConfigurationAssignments_List({
  "resourceGroupName": "",
  "subscriptionId": "",
  "vmName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * subscriptionId **required** `string`: Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * vmName **required** `string`: The name of the virtual machine.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [GuestConfigurationAssignmentList](#guestconfigurationassignmentlist)

### GuestConfigurationAssignments_Delete
Delete a guest configuration assignment


```js
azure_guestconfiguration.GuestConfigurationAssignments_Delete({
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

### GuestConfigurationAssignments_Get
Get information about a guest configuration assignment


```js
azure_guestconfiguration.GuestConfigurationAssignments_Get({
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
  * guestConfigurationAssignmentName **required** `string`: The guest configuration assignment name.
  * subscriptionId **required** `string`: Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * vmName **required** `string`: The name of the virtual machine.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [GuestConfigurationAssignment](#guestconfigurationassignment)

### GuestConfigurationAssignments_CreateOrUpdate
Creates an association between a VM and guest configuration


```js
azure_guestconfiguration.GuestConfigurationAssignments_CreateOrUpdate({
  "guestConfigurationAssignmentName": "",
  "parameters": null,
  "subscriptionId": "",
  "resourceGroupName": "",
  "vmName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * guestConfigurationAssignmentName **required** `string`: Name of the guest configuration assignment.
  * parameters **required** [GuestConfigurationAssignment](#guestconfigurationassignment)
  * subscriptionId **required** `string`: Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The resource group name.
  * vmName **required** `string`: The name of the virtual machine.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [GuestConfigurationAssignment](#guestconfigurationassignment)

### GuestConfigurationAssignmentReports_List
List all reports for the guest configuration assignment, latest report first.


```js
azure_guestconfiguration.GuestConfigurationAssignmentReports_List({
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
  * guestConfigurationAssignmentName **required** `string`: The guest configuration assignment name.
  * subscriptionId **required** `string`: Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * vmName **required** `string`: The name of the virtual machine.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [GuestConfigurationAssignmentReportList](#guestconfigurationassignmentreportlist)

### GuestConfigurationAssignmentReports_Get
Get a report for the guest configuration assignment, by reportId.


```js
azure_guestconfiguration.GuestConfigurationAssignmentReports_Get({
  "resourceGroupName": "",
  "guestConfigurationAssignmentName": "",
  "reportId": "",
  "subscriptionId": "",
  "vmName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * guestConfigurationAssignmentName **required** `string`: The guest configuration assignment name.
  * reportId **required** `string`: The GUID for the guest configuration assignment report.
  * subscriptionId **required** `string`: Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * vmName **required** `string`: The name of the virtual machine.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [GuestConfigurationAssignmentReport](#guestconfigurationassignmentreport)



## Definitions

### AssignmentInfo
* AssignmentInfo `object`: Information about the guest configuration assignment.
  * configuration [ConfigurationInfo](#configurationinfo)
  * name `string`: Name of the guest configuration assignment.

### AssignmentReportDetails
* AssignmentReportDetails `object`: Details of the guest configuration assignment report.
  * complianceStatus `string` (values: Compliant, NonCompliant, Pending): A value indicating compliance status of the virtual machine for the assigned guest configuration.
  * endTime `string`: End date and time of the guest configuration assignment compliance status check.
  * jobId `string`: GUID of the report.
  * operationType `string` (values: Consistency, Initial): Type of report, Consistency or Initial
  * resources `array`: The list of resources for which guest configuration assignment compliance is checked.
    * items [AssignmentReportResource](#assignmentreportresource)
  * startTime `string`: Start date and time of the guest configuration assignment compliance status check.

### AssignmentReportResource
* AssignmentReportResource `object`: The guest configuration assignment resource.
  * complianceStatus `string` (values: Compliant, NonCompliant, Pending): A value indicating compliance status of the virtual machine for the assigned guest configuration.
  * properties `object`: Properties of a guest configuration assignment resource.
  * reasons `array`: Compliance reason and reason code for a resource.
    * items [AssignmentReportResourceComplianceReason](#assignmentreportresourcecompliancereason)

### AssignmentReportResourceComplianceReason
* AssignmentReportResourceComplianceReason `object`: Reason and code for the compliance of the guest configuration assignment resource.
  * code `string`: Code for the compliance of the guest configuration assignment resource.
  * phrase `string`: Reason for the compliance of the guest configuration assignment resource.

### ConfigurationInfo
* ConfigurationInfo `object`: Information about the configuration.
  * name `string`: Name of the configuration.
  * version `string`: Version of the configuration.

### ConfigurationParameter
* ConfigurationParameter `object`: Represents a configuration parameter.
  * name `string`: Name of the configuration parameter.
  * value `string`: Value of the configuration parameter.

### ConfigurationSetting
* ConfigurationSetting `object`: Configuration setting of LCM (Local Configuration Manager).
  * actionAfterReboot `string` (values: ContinueConfiguration, StopConfiguration): Specifies what happens after a reboot during the application of a configuration. The possible values are ContinueConfiguration and StopConfiguration
  * allowModuleOverwrite `string` (values: True, False): If true - new configurations downloaded from the pull service are allowed to overwrite the old ones on the target node. Otherwise, false
  * configurationMode `string` (values: ApplyOnly, ApplyAndMonitor, ApplyAndAutoCorrect): Specifies how the LCM(Local Configuration Manager) actually applies the configuration to the target nodes. Possible values are ApplyOnly, ApplyAndMonitor, and ApplyAndAutoCorrect.
  * configurationModeFrequencyMins `number`: How often, in minutes, the current configuration is checked and applied. This property is ignored if the ConfigurationMode property is set to ApplyOnly. The default value is 15.
  * rebootIfNeeded `string` (values: True, False): Set this to true to automatically reboot the node after a configuration that requires reboot is applied. Otherwise, you will have to manually reboot the node for any configuration that requires it. The default value is false. To use this setting when a reboot condition is enacted by something other than DSC (such as Windows Installer), combine this setting with the xPendingReboot module.
  * refreshFrequencyMins `number`: The time interval, in minutes, at which the LCM checks a pull service to get updated configurations. This value is ignored if the LCM is not configured in pull mode. The default value is 30.

### GuestConfigurationAssignment
* GuestConfigurationAssignment `object`: Guest configuration assignment is an association between a VM and guest configuration.
  * properties [GuestConfigurationAssignmentProperties](#guestconfigurationassignmentproperties)
  * id `string`: ARM resource id of the guest configuration assignment.
  * location `string`: Region where the VM is located.
  * name `string`: Name of the guest configuration assignment.
  * type `string`: The type of the resource.

### GuestConfigurationAssignmentList
* GuestConfigurationAssignmentList `object`: The response of the list guest configuration assignment operation.
  * value `array`: Result of the list guest configuration assignment operation.
    * items [GuestConfigurationAssignment](#guestconfigurationassignment)

### GuestConfigurationAssignmentProperties
* GuestConfigurationAssignmentProperties `object`: Guest configuration assignment properties.
  * assignmentHash `string`: Combined hash of the configuration package and parameters.
  * complianceStatus `string` (values: Compliant, NonCompliant, Pending): A value indicating compliance status of the virtual machine for the assigned guest configuration.
  * context `string`: The source which initiated the guest configuration assignment. Ex: Azure Policy
  * guestConfiguration [GuestConfigurationNavigation](#guestconfigurationnavigation)
  * lastComplianceStatusChecked `string`: Date and time when last compliance status was checked.
  * latestReportId `string`: Id of the latest report for the guest configuration assignment. 
  * provisioningState `string` (values: Succeeded, Failed, Canceled, Created): The provisioning state, which only appears in the response.

### GuestConfigurationAssignmentReport
* GuestConfigurationAssignmentReport `object`: Report for the guest configuration assignment. Report contains information such as compliance status, reason, and more.
  * id `string`: ARM resource id of the report for the guest configuration assignment.
  * name `string`: GUID that identifies the guest configuration assignment report under a subscription, resource group.
  * properties [GuestConfigurationAssignmentReportProperties](#guestconfigurationassignmentreportproperties)

### GuestConfigurationAssignmentReportList
* GuestConfigurationAssignmentReportList `object`: List of guest configuration assignment reports.
  * value `array`: List of reports for the guest configuration. Report contains information such as compliance status, reason and more.
    * items [GuestConfigurationAssignmentReport](#guestconfigurationassignmentreport)

### GuestConfigurationAssignmentReportProperties
* GuestConfigurationAssignmentReportProperties `object`: Report for the guest configuration assignment. Report contains information such as compliance status, reason, and more.
  * assignment [AssignmentInfo](#assignmentinfo)
  * complianceStatus `string` (values: Compliant, NonCompliant, Pending): A value indicating compliance status of the virtual machine for the assigned guest configuration.
  * details [AssignmentReportDetails](#assignmentreportdetails)
  * endTime `string`: End date and time of the guest configuration assignment compliance status check.
  * reportId `string`: GUID that identifies the guest configuration assignment report under a subscription, resource group.
  * startTime `string`: Start date and time of the guest configuration assignment compliance status check.
  * vm [VMInfo](#vminfo)

### GuestConfigurationNavigation
* GuestConfigurationNavigation `object`: Guest configuration is an artifact that encapsulates DSC configuration and its dependencies. The artifact is a zip file containing DSC configuration (as MOF) and dependent resources and other dependencies like modules.
  * configurationParameter `array`: The configuration parameters for the guest configuration.
    * items [ConfigurationParameter](#configurationparameter)
  * configurationSetting [ConfigurationSetting](#configurationsetting)
  * contentHash `string`: Combined hash of the guest configuration package and configuration parameters.
  * contentUri `string`: Uri of the storage where guest configuration package is uploaded.
  * kind `string` (values: DSC): Kind of the guest configuration. For example:DSC
  * name `string`: Name of the guest configuration.
  * version `string`: Version of the guest configuration.

### VMInfo
* VMInfo `object`: Information about the VM.
  * id `string`: Azure resource Id of the VM.
  * uuid `string`: UUID(Universally Unique Identifier) of the VM.


