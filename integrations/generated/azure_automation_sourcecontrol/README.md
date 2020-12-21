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

.then(data => {
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
* output [SourceControlListResult](#sourcecontrollistresult)

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
* output [SourceControl](#sourcecontrol)

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
  * parameters **required** [SourceControlUpdateParameters](#sourcecontrolupdateparameters)
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [SourceControl](#sourcecontrol)

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
  * parameters **required** [SourceControlCreateOrUpdateParameters](#sourcecontrolcreateorupdateparameters)
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [SourceControl](#sourcecontrol)



## Definitions

### SourceControl
* SourceControl `object`: Definition of the source control.
  * properties [SourceControlProperties](#sourcecontrolproperties)
  * id `string`: Fully qualified resource Id for the resource
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### SourceControlCreateOrUpdateParameters
* SourceControlCreateOrUpdateParameters `object`: The parameters supplied to the create or update source control operation.
  * properties **required** [SourceControlCreateOrUpdateProperties](#sourcecontrolcreateorupdateproperties)

### SourceControlCreateOrUpdateProperties
* SourceControlCreateOrUpdateProperties `object`: The properties of the create source control operation.
  * autoSync `boolean`: The auto async of the source control. Default is false.
  * branch `string`: The repo branch of the source control. Include branch as empty string for VsoTfvc.
  * description `string`: The user description of the source control.
  * folderPath `string`: The folder path of the source control. Path must be relative.
  * publishRunbook `boolean`: The auto publish of the source control. Default is true.
  * repoUrl `string`: The repo url of the source control.
  * securityToken [SourceControlSecurityTokenProperties](#sourcecontrolsecuritytokenproperties)
  * sourceType `string` (values: VsoGit, VsoTfvc, GitHub): The source type. Must be one of VsoGit, VsoTfvc, GitHub, case sensitive.

### SourceControlListResult
* SourceControlListResult `object`: The response model for the list source controls operation.
  * nextLink `string`: The next link.
  * value `array`: The list of source controls.
    * items [SourceControl](#sourcecontrol)

### SourceControlProperties
* SourceControlProperties `object`: Definition of the source control properties
  * autoSync `boolean`: The auto sync of the source control. Default is false.
  * branch `string`: The repo branch of the source control. Include branch as empty string for VsoTfvc.
  * creationTime `string`: The creation time.
  * description `string`: The description.
  * folderPath `string`: The folder path of the source control.
  * lastModifiedTime `string`: The last modified time.
  * publishRunbook `boolean`: The auto publish of the source control. Default is true.
  * repoUrl `string`: The repo url of the source control.
  * sourceType `string` (values: VsoGit, VsoTfvc, GitHub): The source type. Must be one of VsoGit, VsoTfvc, GitHub.

### SourceControlSecurityTokenProperties
* SourceControlSecurityTokenProperties `object`
  * accessToken `string`: The access token.
  * refreshToken `string`: The refresh token.
  * tokenType `string` (values: PersonalAccessToken, Oauth): The token type. Must be either PersonalAccessToken or Oauth.

### SourceControlUpdateParameters
* SourceControlUpdateParameters `object`: The parameters supplied to the update source control operation.
  * properties [SourceControlUpdateProperties](#sourcecontrolupdateproperties)

### SourceControlUpdateProperties
* SourceControlUpdateProperties `object`: The properties of the update source control
  * autoSync `boolean`: The auto sync of the source control. Default is false.
  * branch `string`: The repo branch of the source control.
  * description `string`: The user description of the source control.
  * folderPath `string`: The folder path of the source control. Path must be relative.
  * publishRunbook `boolean`: The auto publish of the source control. Default is true.
  * securityToken [SourceControlSecurityTokenProperties](#sourcecontrolsecuritytokenproperties)


