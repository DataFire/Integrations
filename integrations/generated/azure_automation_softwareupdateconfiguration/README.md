# @datafire/azure_automation_softwareupdateconfiguration

Client library for Update Management

## Installation and Usage
```bash
npm install --save @datafire/azure_automation_softwareupdateconfiguration
```
```js
let azure_automation_softwareupdateconfiguration = require('@datafire/azure_automation_softwareupdateconfiguration').create({
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

APIs for managing software update configurations.

## Actions

### SoftwareUpdateConfigurations_List
Get all software update configurations for the account.


```js
azure_automation_softwareupdateconfiguration.SoftwareUpdateConfigurations_List({
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
  * clientRequestId `string`: Identifies this specific client request.
  * $filter `string`: The filter to apply on the operation.

#### Output
* output [softwareUpdateConfigurationListResult](#softwareupdateconfigurationlistresult)

### SoftwareUpdateConfigurations_Delete
delete a specific software update configuration.


```js
azure_automation_softwareupdateconfiguration.SoftwareUpdateConfigurations_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "softwareUpdateConfigurationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * softwareUpdateConfigurationName **required** `string`: The name of the software update configuration to be created.
  * api-version **required** `string`: Client Api Version.
  * clientRequestId `string`: Identifies this specific client request.

#### Output
*Output schema unknown*

### SoftwareUpdateConfigurations_GetByName
Get a single software update configuration by name.


```js
azure_automation_softwareupdateconfiguration.SoftwareUpdateConfigurations_GetByName({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "softwareUpdateConfigurationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * softwareUpdateConfigurationName **required** `string`: The name of the software update configuration to be created.
  * api-version **required** `string`: Client Api Version.
  * clientRequestId `string`: Identifies this specific client request.

#### Output
* output [softwareUpdateConfiguration](#softwareupdateconfiguration)

### SoftwareUpdateConfigurations_Create
Create a new software update configuration with the name given in the URI.


```js
azure_automation_softwareupdateconfiguration.SoftwareUpdateConfigurations_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "softwareUpdateConfigurationName": "",
  "api-version": "",
  "parameters": {
    "properties": null
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * softwareUpdateConfigurationName **required** `string`: The name of the software update configuration to be created.
  * api-version **required** `string`: Client Api Version.
  * clientRequestId `string`: Identifies this specific client request.
  * parameters **required** [softwareUpdateConfiguration](#softwareupdateconfiguration)

#### Output
* output [softwareUpdateConfiguration](#softwareupdateconfiguration)



## Definitions

### AdvancedSchedule
* AdvancedSchedule `object`: The properties of the create Advanced Schedule.
  * monthDays `array`: Days of the month that the job should execute on. Must be between 1 and 31.
    * items `integer`
  * monthlyOccurrences `array`: Occurrences of days within a month.
    * items [AdvancedScheduleMonthlyOccurrence](#advancedschedulemonthlyoccurrence)
  * weekDays `array`: Days of the week that the job should execute on.
    * items `string`

### AdvancedScheduleMonthlyOccurrence
* AdvancedScheduleMonthlyOccurrence `object`: The properties of the create advanced schedule monthly occurrence.
  * day `string` (values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday): Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
  * occurrence `integer`: Occurrence of the week within the month. Must be between 1 and 5

### AzureQueryProperties
* AzureQueryProperties `object`: Azure query for the update configuration.
  * locations `array`: List of locations to scope the query to.
    * items `string`: Location to scope the query to.
  * scope `array`: List of Subscription or Resource Group ARM Ids.
    * items `string`: Subscription or Resource Group ARM Id.
  * tagSettings [TagSettingsProperties](#tagsettingsproperties)

### LinuxProperties
* LinuxProperties `object`: Linux specific update configuration.
  * excludedPackageNameMasks `array`: packages excluded from the software update configuration.
    * items `string`
  * includedPackageClassifications `string` (values: Unclassified, Critical, Security, Other): Update classifications included in the software update configuration.
  * includedPackageNameMasks `array`: packages included from the software update configuration.
    * items `string`
  * rebootSetting `string`: Reboot setting for the software update configuration.

### NonAzureQueryProperties
* NonAzureQueryProperties `object`: Non Azure query for the update configuration.
  * functionAlias `string`: Log Analytics Saved Search name.
  * workspaceId `string`: Workspace Id for Log Analytics in which the saved Search is resided.

### ScheduleProperties
* ScheduleProperties `object`: Definition of schedule parameters.
  * advancedSchedule [AdvancedSchedule](#advancedschedule)
  * creationTime `string`: Gets or sets the creation time.
  * description `string`: Gets or sets the description.
  * expiryTime `string`: Gets or sets the end time of the schedule.
  * expiryTimeOffsetMinutes `number`: Gets or sets the expiry time's offset in minutes.
  * frequency `string` (values: OneTime, Day, Hour, Week, Month, Minute): Gets or sets the frequency of the schedule.
  * interval `integer`: Gets or sets the interval of the schedule.
  * isEnabled `boolean`: Gets or sets a value indicating whether this schedule is enabled.
  * lastModifiedTime `string`: Gets or sets the last modified time.
  * nextRun `string`: Gets or sets the next run time of the schedule.
  * nextRunOffsetMinutes `number`: Gets or sets the next run time's offset in minutes.
  * startTime `string`: Gets or sets the start time of the schedule.
  * startTimeOffsetMinutes `number`: Gets the start time's offset in minutes.
  * timeZone `string`: Gets or sets the time zone of the schedule.

### TagSettingsProperties
* TagSettingsProperties `object`: Tag filter information for the VM.
  * filterOperator `string` (values: All, Any): Filter VMs by Any or All specified tags.
  * tags `object`: Dictionary of tags with its list of values.

### TargetProperties
* TargetProperties `object`: Group specific to the update configuration.
  * azureQueries `array`: List of Azure queries in the software update configuration.
    * items [AzureQueryProperties](#azurequeryproperties)
  * nonAzureQueries `array`: List of non Azure queries in the software update configuration.
    * items [NonAzureQueryProperties](#nonazurequeryproperties)

### WindowsProperties
* WindowsProperties `object`: Windows specific update configuration.
  * excludedKbNumbers `array`: KB numbers excluded from the software update configuration.
    * items `string`
  * includedKbNumbers `array`: KB numbers included from the software update configuration.
    * items `string`
  * includedUpdateClassifications `string` (values: Unclassified, Critical, Security, UpdateRollup, FeaturePack, ServicePack, Definition, Tools, Updates): Update classification included in the software update configuration. A comma separated string with required values
  * rebootSetting `string`: Reboot setting for the software update configuration.

### collectionItemUpdateConfiguration
* collectionItemUpdateConfiguration `object`: object returned when requesting a collection of software update configuration
  * azureVirtualMachines `array`: List of azure resource Ids for azure virtual machines targeted by the software update configuration.
    * items `string`: Azure Resource Manager Id for a virtual machine.
  * duration `string`: Maximum time allowed for the software update configuration run. Duration needs to be specified using the format PT[n]H[n]M[n]S as per ISO8601

### operatingSystemType
* operatingSystemType `string` (values: Windows, Linux): Target operating system for the software update configuration.

### softwareUpdateConfiguration
* softwareUpdateConfiguration `object`: Software update configuration properties.
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * properties **required** [softwareUpdateConfigurationProperties](#softwareupdateconfigurationproperties)
  * type `string`: Resource type

### softwareUpdateConfigurationCollectionItem
* softwareUpdateConfigurationCollectionItem `object`: Software update configuration collection item properties.
  * id `string`: Resource Id of the software update configuration
  * name `string`: Name of the software update configuration.
  * properties **required** [softwareUpdateConfigurationCollectionItemProperties](#softwareupdateconfigurationcollectionitemproperties)

### softwareUpdateConfigurationCollectionItemProperties
* softwareUpdateConfigurationCollectionItemProperties `object`: Software update configuration collection item properties.
  * creationTime `string`: Creation time of the software update configuration, which only appears in the response.
  * frequency `string` (values: OneTime, Day, Hour, Week, Month, Minute): Gets or sets the frequency of the schedule.
  * lastModifiedTime `string`: Last time software update configuration was modified, which only appears in the response.
  * nextRun `string`: ext run time of the update.
  * provisioningState `string`: Provisioning state for the software update configuration, which only appears in the response.
  * startTime `string`: the start time of the update.
  * updateConfiguration [collectionItemUpdateConfiguration](#collectionitemupdateconfiguration)

### softwareUpdateConfigurationListResult
* softwareUpdateConfigurationListResult `object`: result of listing all software update configuration
  * value `array`: outer object returned when listing all software update configurations
    * items [softwareUpdateConfigurationCollectionItem](#softwareupdateconfigurationcollectionitem)

### softwareUpdateConfigurationProperties
* softwareUpdateConfigurationProperties `object`: Software update configuration properties.
  * createdBy `string`: CreatedBy property, which only appears in the response.
  * creationTime `string`: Creation time of the resource, which only appears in the response.
  * error `object`: Error response of an operation failure
    * code `string`: Error code
    * message `string`: Error message indicating why the operation failed.
  * lastModifiedBy `string`: LastModifiedBy property, which only appears in the response.
  * lastModifiedTime `string`: Last time resource was modified, which only appears in the response.
  * provisioningState `string`: Provisioning state for the software update configuration, which only appears in the response.
  * scheduleInfo **required** [ScheduleProperties](#scheduleproperties)
  * tasks [softwareUpdateConfigurationTasks](#softwareupdateconfigurationtasks)
  * updateConfiguration **required** [updateConfiguration](#updateconfiguration)

### softwareUpdateConfigurationTasks
* softwareUpdateConfigurationTasks `object`: Task properties of the software update configuration.
  * postTask [taskProperties](#taskproperties)
  * preTask [taskProperties](#taskproperties)

### taskProperties
* taskProperties `object`: Task properties of the software update configuration.
  * parameters `object`: Gets or sets the parameters of the task.
  * source `string`: Gets or sets the name of the runbook.

### updateConfiguration
* updateConfiguration `object`: Update specific properties of the software update configuration.
  * azureVirtualMachines `array`: List of azure resource Ids for azure virtual machines targeted by the software update configuration.
    * items `string`: Azure Resource Manager Id for a virtual machine.
  * duration `string`: Maximum time allowed for the software update configuration run. Duration needs to be specified using the format PT[n]H[n]M[n]S as per ISO8601
  * linux [LinuxProperties](#linuxproperties)
  * nonAzureComputerNames `array`: List of names of non-azure machines targeted by the software update configuration.
    * items `string`: Name of Non-Azure OMS Computer.
  * operatingSystem **required** [operatingSystemType](#operatingsystemtype)
  * targets [TargetProperties](#targetproperties)
  * windows [WindowsProperties](#windowsproperties)


