# @datafire/azure_automation_sourcecontrol

Client library for AutomationManagement

## Installation and Usage
```bash
npm install --save @datafire/azure_automation_sourcecontrol
```
```js
let azure_automation_sourcecontrol = require('@datafire/azure_automation_sourcecontrol').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_automation_sourcecontrol.SourceControl_ListByAutomationAccount({
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

### SourceControl_ListByAutomationAccount
Retrieve a list of source controls.


```js
azure_automation_sourcecontrol.SourceControl_ListByAutomationAccount({
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
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: The response model for the list source controls operation.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: Gets or sets a list of souce controls.
    * items `object`: Definition of the source control.
      * id `string`: Resource Id.
      * name `string`: Resource name.
      * properties `object`: Definition of the source control properties
        * autoSync `boolean`: Gets or sets auto async of the source control. Default is false.
        * branch `string`: Gets or sets the repo branch of the source control. Include branch as empty string for VsoTfvc.
        * creationTime `string`: Gets or sets the creation time.
        * description `string`: Gets or sets the description.
        * folderPath `string`: Gets or sets the folder path of the source control.
        * lastModifiedTime `string`: Gets or sets the last modified time.
        * publishRunbook `boolean`: Gets or sets the auto publish of the source control. Default is true.
        * repoUrl `string`: Gets or sets the repo url of the source control.
        * sourceType `string` (values: VsoGit, VsoTfvc, GitHub): The source type. Must be one of VsoGit, VsoTfvc, GitHub.
      * type `string`: Resource type.

### SourceControl_Delete
Delete the source control.


```js
azure_automation_sourcecontrol.SourceControl_Delete({
  "resourceGroupName": "",
  "automationAccountName": "",
  "sourceControlName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * sourceControlName **required** `string`: The name of source control.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### SourceControl_Get
Retrieve the source control identified by source control name.


```js
azure_automation_sourcecontrol.SourceControl_Get({
  "resourceGroupName": "",
  "automationAccountName": "",
  "sourceControlName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * sourceControlName **required** `string`: The name of source control.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the source control.
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * properties `object`: Definition of the source control properties
    * autoSync `boolean`: Gets or sets auto async of the source control. Default is false.
    * branch `string`: Gets or sets the repo branch of the source control. Include branch as empty string for VsoTfvc.
    * creationTime `string`: Gets or sets the creation time.
    * description `string`: Gets or sets the description.
    * folderPath `string`: Gets or sets the folder path of the source control.
    * lastModifiedTime `string`: Gets or sets the last modified time.
    * publishRunbook `boolean`: Gets or sets the auto publish of the source control. Default is true.
    * repoUrl `string`: Gets or sets the repo url of the source control.
    * sourceType `string` (values: VsoGit, VsoTfvc, GitHub): The source type. Must be one of VsoGit, VsoTfvc, GitHub.
  * type `string`: Resource type.

### SourceControl_Update
Update a source control.


```js
azure_automation_sourcecontrol.SourceControl_Update({
  "resourceGroupName": "",
  "automationAccountName": "",
  "sourceControlName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * sourceControlName **required** `string`: The source control name.
  * parameters **required** `object`: The parameters supplied to the update source control operation.
    * properties `object`: The properties of the update source control
      * autoSync `boolean`: Gets or sets auto async of the source control. Default is false.
      * branch `string`: Gets or sets the repo branch of the source control.
      * description `string`: Gets or sets the user description of the source control.
      * folderPath `string`: Gets or sets the folder path of the source control. Path must be relative.
      * publishRunbook `boolean`: Gets or sets the auto publish of the source control. Default is true.
      * securityToken `string`: Gets or sets the authorization token for the repo of the source control.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the source control.
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * properties `object`: Definition of the source control properties
    * autoSync `boolean`: Gets or sets auto async of the source control. Default is false.
    * branch `string`: Gets or sets the repo branch of the source control. Include branch as empty string for VsoTfvc.
    * creationTime `string`: Gets or sets the creation time.
    * description `string`: Gets or sets the description.
    * folderPath `string`: Gets or sets the folder path of the source control.
    * lastModifiedTime `string`: Gets or sets the last modified time.
    * publishRunbook `boolean`: Gets or sets the auto publish of the source control. Default is true.
    * repoUrl `string`: Gets or sets the repo url of the source control.
    * sourceType `string` (values: VsoGit, VsoTfvc, GitHub): The source type. Must be one of VsoGit, VsoTfvc, GitHub.
  * type `string`: Resource type.

### SourceControl_CreateOrUpdate
Create a source control.


```js
azure_automation_sourcecontrol.SourceControl_CreateOrUpdate({
  "resourceGroupName": "",
  "automationAccountName": "",
  "sourceControlName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * sourceControlName **required** `string`: The source control name.
  * parameters **required** `object`: The parameters supplied to the create or update source control operation.
    * properties **required** `object`: The properties of the create source control operation.
      * autoSync `boolean`: Gets or sets auto async of the source control. Default is false.
      * branch `string`: Gets or sets the repo branch of the source control. Include branch as empty string for VsoTfvc.
      * description `string`: Gets or sets the user description of the source control.
      * folderPath `string`: Gets or sets the folder path of the source control. Path must be relative.
      * publishRunbook `boolean`: Gets or sets the auto publish of the source control. Default is true.
      * repoUrl `string`: Gets or sets the repo url of the source control.
      * securityToken `string`: Gets or sets the authorization token for the repo of the source control.
      * sourceType `string` (values: VsoGit, VsoTfvc, GitHub): The source type. Must be one of VsoGit, VsoTfvc, GitHub, case sensitive.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the source control.
  * id `string`: Resource Id.
  * name `string`: Resource name.
  * properties `object`: Definition of the source control properties
    * autoSync `boolean`: Gets or sets auto async of the source control. Default is false.
    * branch `string`: Gets or sets the repo branch of the source control. Include branch as empty string for VsoTfvc.
    * creationTime `string`: Gets or sets the creation time.
    * description `string`: Gets or sets the description.
    * folderPath `string`: Gets or sets the folder path of the source control.
    * lastModifiedTime `string`: Gets or sets the last modified time.
    * publishRunbook `boolean`: Gets or sets the auto publish of the source control. Default is true.
    * repoUrl `string`: Gets or sets the repo url of the source control.
    * sourceType `string` (values: VsoGit, VsoTfvc, GitHub): The source type. Must be one of VsoGit, VsoTfvc, GitHub.
  * type `string`: Resource type.



## Definitions

*This integration has no definitions*
