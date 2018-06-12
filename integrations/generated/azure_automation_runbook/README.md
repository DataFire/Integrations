# @datafire/azure_automation_runbook

Client library for AutomationManagement

## Installation and Usage
```bash
npm install --save @datafire/azure_automation_runbook
```
```js
let azure_automation_runbook = require('@datafire/azure_automation_runbook').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_automation_runbook.Runbook_ListByAutomationAccount({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### Runbook_ListByAutomationAccount
Retrieve a list of runbooks.


```js
azure_automation_runbook.Runbook_ListByAutomationAccount({
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
  * automationAccountName **required** `string`: The automation account name.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: The response model for the list runbook operation.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: Gets or sets a list of runbooks.
    * items `object`: Definition of the runbook type.
      * etag `string`: Gets or sets the etag of the resource.
      * properties `object`: Definition of the runbook property type.
        * creationTime `string`: Gets or sets the creation time.
        * description `string`: Gets or sets the description.
        * draft `object`: Definition of the runbook type.
          * creationTime `string`: Gets or sets the creation time of the runbook draft.
          * draftContentLink `object`: Definition of the content link.
            * contentHash `object`: Definition of the runbook property type.
              * algorithm **required** `string`: Gets or sets the content hash algorithm used to hash the content.
              * value **required** `string`: Gets or sets expected hash value of the content.
            * uri `string`: Gets or sets the uri of the runbook content.
            * version `string`: Gets or sets the version of the content.
          * inEdit `boolean`: Gets or sets whether runbook is in edit mode.
          * lastModifiedTime `string`: Gets or sets the last modified time of the runbook draft.
          * outputTypes `array`: Gets or sets the runbook output types.
            * items `string`
          * parameters `object`: Gets or sets the runbook draft parameters.
        * jobCount `integer`: Gets or sets the job count of the runbook.
        * lastModifiedBy `string`: Gets or sets the last modified by.
        * lastModifiedTime `string`: Gets or sets the last modified time.
        * logActivityTrace `integer`: Gets or sets the option to log activity trace of the runbook.
        * logProgress `boolean`: Gets or sets progress log option.
        * logVerbose `boolean`: Gets or sets verbose log option.
        * outputTypes `array`: Gets or sets the runbook output types.
          * items `string`
        * parameters `object`: Gets or sets the runbook parameters.
        * provisioningState `string` (values: Succeeded): Gets or sets the provisioning state of the runbook.
        * publishContentLink `object`: Definition of the content link.
          * contentHash `object`: Definition of the runbook property type.
            * algorithm **required** `string`: Gets or sets the content hash algorithm used to hash the content.
            * value **required** `string`: Gets or sets expected hash value of the content.
          * uri `string`: Gets or sets the uri of the runbook content.
          * version `string`: Gets or sets the version of the content.
        * runbookType `string` (values: Script, Graph, PowerShellWorkflow, PowerShell, GraphPowerShellWorkflow, GraphPowerShell): Gets or sets the type of the runbook.
        * state `string` (values: New, Edit, Published): Gets or sets the state of the runbook.
      * location `string`: The Azure Region where the resource lives
      * tags `object`: Resource tags.
      * id `string`: Fully qualified resource Id for the resource
      * name `string`: The name of the resource
      * type `string`: The type of the resource.

### Runbook_Delete
Delete the runbook by name.


```js
azure_automation_runbook.Runbook_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The runbook name.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Runbook_Get
Retrieve the runbook identified by runbook name.


```js
azure_automation_runbook.Runbook_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The runbook name.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the runbook type.
  * etag `string`: Gets or sets the etag of the resource.
  * properties `object`: Definition of the runbook property type.
    * creationTime `string`: Gets or sets the creation time.
    * description `string`: Gets or sets the description.
    * draft `object`: Definition of the runbook type.
      * creationTime `string`: Gets or sets the creation time of the runbook draft.
      * draftContentLink `object`: Definition of the content link.
        * contentHash `object`: Definition of the runbook property type.
          * algorithm **required** `string`: Gets or sets the content hash algorithm used to hash the content.
          * value **required** `string`: Gets or sets expected hash value of the content.
        * uri `string`: Gets or sets the uri of the runbook content.
        * version `string`: Gets or sets the version of the content.
      * inEdit `boolean`: Gets or sets whether runbook is in edit mode.
      * lastModifiedTime `string`: Gets or sets the last modified time of the runbook draft.
      * outputTypes `array`: Gets or sets the runbook output types.
        * items `string`
      * parameters `object`: Gets or sets the runbook draft parameters.
    * jobCount `integer`: Gets or sets the job count of the runbook.
    * lastModifiedBy `string`: Gets or sets the last modified by.
    * lastModifiedTime `string`: Gets or sets the last modified time.
    * logActivityTrace `integer`: Gets or sets the option to log activity trace of the runbook.
    * logProgress `boolean`: Gets or sets progress log option.
    * logVerbose `boolean`: Gets or sets verbose log option.
    * outputTypes `array`: Gets or sets the runbook output types.
      * items `string`
    * parameters `object`: Gets or sets the runbook parameters.
    * provisioningState `string` (values: Succeeded): Gets or sets the provisioning state of the runbook.
    * publishContentLink `object`: Definition of the content link.
      * contentHash `object`: Definition of the runbook property type.
        * algorithm **required** `string`: Gets or sets the content hash algorithm used to hash the content.
        * value **required** `string`: Gets or sets expected hash value of the content.
      * uri `string`: Gets or sets the uri of the runbook content.
      * version `string`: Gets or sets the version of the content.
    * runbookType `string` (values: Script, Graph, PowerShellWorkflow, PowerShell, GraphPowerShellWorkflow, GraphPowerShell): Gets or sets the type of the runbook.
    * state `string` (values: New, Edit, Published): Gets or sets the state of the runbook.
  * location `string`: The Azure Region where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### Runbook_Update
Update the runbook identified by runbook name.


```js
azure_automation_runbook.Runbook_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The runbook name.
  * parameters **required** `object`: The parameters supplied to the update runbook operation.
    * location `string`: Gets or sets the location of the resource.
    * name `string`: Gets or sets the name of the resource.
    * properties `object`: The parameters supplied to the update runbook properties.
      * description `string`: Gets or sets the description of the runbook.
      * logActivityTrace `integer`: Gets or sets the activity-level tracing options of the runbook.
      * logProgress `boolean`: Gets or sets progress log option.
      * logVerbose `boolean`: Gets or sets verbose log option.
    * tags `object`: Gets or sets the tags attached to the resource.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the runbook type.
  * etag `string`: Gets or sets the etag of the resource.
  * properties `object`: Definition of the runbook property type.
    * creationTime `string`: Gets or sets the creation time.
    * description `string`: Gets or sets the description.
    * draft `object`: Definition of the runbook type.
      * creationTime `string`: Gets or sets the creation time of the runbook draft.
      * draftContentLink `object`: Definition of the content link.
        * contentHash `object`: Definition of the runbook property type.
          * algorithm **required** `string`: Gets or sets the content hash algorithm used to hash the content.
          * value **required** `string`: Gets or sets expected hash value of the content.
        * uri `string`: Gets or sets the uri of the runbook content.
        * version `string`: Gets or sets the version of the content.
      * inEdit `boolean`: Gets or sets whether runbook is in edit mode.
      * lastModifiedTime `string`: Gets or sets the last modified time of the runbook draft.
      * outputTypes `array`: Gets or sets the runbook output types.
        * items `string`
      * parameters `object`: Gets or sets the runbook draft parameters.
    * jobCount `integer`: Gets or sets the job count of the runbook.
    * lastModifiedBy `string`: Gets or sets the last modified by.
    * lastModifiedTime `string`: Gets or sets the last modified time.
    * logActivityTrace `integer`: Gets or sets the option to log activity trace of the runbook.
    * logProgress `boolean`: Gets or sets progress log option.
    * logVerbose `boolean`: Gets or sets verbose log option.
    * outputTypes `array`: Gets or sets the runbook output types.
      * items `string`
    * parameters `object`: Gets or sets the runbook parameters.
    * provisioningState `string` (values: Succeeded): Gets or sets the provisioning state of the runbook.
    * publishContentLink `object`: Definition of the content link.
      * contentHash `object`: Definition of the runbook property type.
        * algorithm **required** `string`: Gets or sets the content hash algorithm used to hash the content.
        * value **required** `string`: Gets or sets expected hash value of the content.
      * uri `string`: Gets or sets the uri of the runbook content.
      * version `string`: Gets or sets the version of the content.
    * runbookType `string` (values: Script, Graph, PowerShellWorkflow, PowerShell, GraphPowerShellWorkflow, GraphPowerShell): Gets or sets the type of the runbook.
    * state `string` (values: New, Edit, Published): Gets or sets the state of the runbook.
  * location `string`: The Azure Region where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### Runbook_CreateOrUpdate
Create the runbook identified by runbook name.


```js
azure_automation_runbook.Runbook_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The runbook name.
  * parameters **required** `object`: The parameters supplied to the create or update runbook operation.
    * location `string`: Gets or sets the location of the resource.
    * name `string`: Gets or sets the name of the resource.
    * properties **required** `object`: The parameters supplied to the create or update runbook properties.
      * description `string`: Gets or sets the description of the runbook.
      * draft `object`: Definition of the runbook type.
        * creationTime `string`: Gets or sets the creation time of the runbook draft.
        * draftContentLink `object`: Definition of the content link.
          * contentHash `object`: Definition of the runbook property type.
            * algorithm **required** `string`: Gets or sets the content hash algorithm used to hash the content.
            * value **required** `string`: Gets or sets expected hash value of the content.
          * uri `string`: Gets or sets the uri of the runbook content.
          * version `string`: Gets or sets the version of the content.
        * inEdit `boolean`: Gets or sets whether runbook is in edit mode.
        * lastModifiedTime `string`: Gets or sets the last modified time of the runbook draft.
        * outputTypes `array`: Gets or sets the runbook output types.
          * items `string`
        * parameters `object`: Gets or sets the runbook draft parameters.
      * logActivityTrace `integer`: Gets or sets the activity-level tracing options of the runbook.
      * logProgress `boolean`: Gets or sets progress log option.
      * logVerbose `boolean`: Gets or sets verbose log option.
      * publishContentLink `object`: Definition of the content link.
        * contentHash `object`: Definition of the runbook property type.
          * algorithm **required** `string`: Gets or sets the content hash algorithm used to hash the content.
          * value **required** `string`: Gets or sets expected hash value of the content.
        * uri `string`: Gets or sets the uri of the runbook content.
        * version `string`: Gets or sets the version of the content.
      * runbookType **required** `string` (values: Script, Graph, PowerShellWorkflow, PowerShell, GraphPowerShellWorkflow, GraphPowerShell): Gets or sets the type of the runbook.
    * tags `object`: Gets or sets the tags attached to the resource.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the runbook type.
  * etag `string`: Gets or sets the etag of the resource.
  * properties `object`: Definition of the runbook property type.
    * creationTime `string`: Gets or sets the creation time.
    * description `string`: Gets or sets the description.
    * draft `object`: Definition of the runbook type.
      * creationTime `string`: Gets or sets the creation time of the runbook draft.
      * draftContentLink `object`: Definition of the content link.
        * contentHash `object`: Definition of the runbook property type.
          * algorithm **required** `string`: Gets or sets the content hash algorithm used to hash the content.
          * value **required** `string`: Gets or sets expected hash value of the content.
        * uri `string`: Gets or sets the uri of the runbook content.
        * version `string`: Gets or sets the version of the content.
      * inEdit `boolean`: Gets or sets whether runbook is in edit mode.
      * lastModifiedTime `string`: Gets or sets the last modified time of the runbook draft.
      * outputTypes `array`: Gets or sets the runbook output types.
        * items `string`
      * parameters `object`: Gets or sets the runbook draft parameters.
    * jobCount `integer`: Gets or sets the job count of the runbook.
    * lastModifiedBy `string`: Gets or sets the last modified by.
    * lastModifiedTime `string`: Gets or sets the last modified time.
    * logActivityTrace `integer`: Gets or sets the option to log activity trace of the runbook.
    * logProgress `boolean`: Gets or sets progress log option.
    * logVerbose `boolean`: Gets or sets verbose log option.
    * outputTypes `array`: Gets or sets the runbook output types.
      * items `string`
    * parameters `object`: Gets or sets the runbook parameters.
    * provisioningState `string` (values: Succeeded): Gets or sets the provisioning state of the runbook.
    * publishContentLink `object`: Definition of the content link.
      * contentHash `object`: Definition of the runbook property type.
        * algorithm **required** `string`: Gets or sets the content hash algorithm used to hash the content.
        * value **required** `string`: Gets or sets expected hash value of the content.
      * uri `string`: Gets or sets the uri of the runbook content.
      * version `string`: Gets or sets the version of the content.
    * runbookType `string` (values: Script, Graph, PowerShellWorkflow, PowerShell, GraphPowerShellWorkflow, GraphPowerShell): Gets or sets the type of the runbook.
    * state `string` (values: New, Edit, Published): Gets or sets the state of the runbook.
  * location `string`: The Azure Region where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### Runbook_GetContent
Retrieve the content of runbook identified by runbook name.


```js
azure_automation_runbook.Runbook_GetContent({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The runbook name.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `string`

### RunbookDraft_Get
Retrieve the runbook draft identified by runbook name.


```js
azure_automation_runbook.RunbookDraft_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The runbook name.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the runbook type.
  * creationTime `string`: Gets or sets the creation time of the runbook draft.
  * draftContentLink `object`: Definition of the content link.
    * contentHash `object`: Definition of the runbook property type.
      * algorithm **required** `string`: Gets or sets the content hash algorithm used to hash the content.
      * value **required** `string`: Gets or sets expected hash value of the content.
    * uri `string`: Gets or sets the uri of the runbook content.
    * version `string`: Gets or sets the version of the content.
  * inEdit `boolean`: Gets or sets whether runbook is in edit mode.
  * lastModifiedTime `string`: Gets or sets the last modified time of the runbook draft.
  * outputTypes `array`: Gets or sets the runbook output types.
    * items `string`
  * parameters `object`: Gets or sets the runbook draft parameters.

### RunbookDraft_GetContent
Retrieve the content of runbook draft identified by runbook name.


```js
azure_automation_runbook.RunbookDraft_GetContent({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The runbook name.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `string`

### RunbookDraft_ReplaceContent
Replaces the runbook draft content.


```js
azure_automation_runbook.RunbookDraft_ReplaceContent({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "runbookContent": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The runbook name.
  * runbookContent **required** `string`
  * api-version **required** `string`: Client Api Version.

#### Output
* output `string`

### RunbookDraft_Publish
Publish runbook draft.


```js
azure_automation_runbook.RunbookDraft_Publish({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The parameters supplied to the publish runbook operation.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `string`

### TestJob_Get
Retrieve the test job for the specified runbook.


```js
azure_automation_runbook.TestJob_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The runbook name.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the test job.
  * creationTime `string`: Gets or sets the creation time of the test job.
  * endTime `string`: Gets or sets the end time of the test job.
  * exception `string`: Gets or sets the exception of the test job.
  * lastModifiedTime `string`: Gets or sets the last modified time of the test job.
  * lastStatusModifiedTime `string`: Gets or sets the last status modified time of the test job.
  * logActivityTrace `integer`: The activity-level tracing options of the runbook.
  * parameters `object`: Gets or sets the parameters of the test job.
  * runOn `string`: Gets or sets the runOn which specifies the group name where the job is to be executed.
  * startTime `string`: Gets or sets the start time of the test job.
  * status `string`: Gets or sets the status of the test job.
  * statusDetails `string`: Gets or sets the status details of the test job.

### TestJob_Create
Create a test job of the runbook.


```js
azure_automation_runbook.TestJob_Create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The parameters supplied to the create test job operation.
  * parameters **required** `object`: The parameters supplied to the create test job operation.
    * parameters `object`: Gets or sets the parameters of the test job.
    * runOn `string`: Gets or sets the runOn which specifies the group name where the job is to be executed.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the test job.
  * creationTime `string`: Gets or sets the creation time of the test job.
  * endTime `string`: Gets or sets the end time of the test job.
  * exception `string`: Gets or sets the exception of the test job.
  * lastModifiedTime `string`: Gets or sets the last modified time of the test job.
  * lastStatusModifiedTime `string`: Gets or sets the last status modified time of the test job.
  * logActivityTrace `integer`: The activity-level tracing options of the runbook.
  * parameters `object`: Gets or sets the parameters of the test job.
  * runOn `string`: Gets or sets the runOn which specifies the group name where the job is to be executed.
  * startTime `string`: Gets or sets the start time of the test job.
  * status `string`: Gets or sets the status of the test job.
  * statusDetails `string`: Gets or sets the status details of the test job.

### TestJob_Resume
Resume the test job.


```js
azure_automation_runbook.TestJob_Resume({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The runbook name.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### TestJob_Stop
Stop the test job.


```js
azure_automation_runbook.TestJob_Stop({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The runbook name.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### TestJobStreams_ListByTestJob
Retrieve a list of test job streams identified by runbook name.


```js
azure_automation_runbook.TestJobStreams_ListByTestJob({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The runbook name.
  * $filter `string`: The filter to apply on the operation.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: The response model for the list job stream operation.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: A list of job streams.
    * items `object`: Definition of the job stream.
      * id `string`: Gets or sets the id of the resource.
      * properties `object`: Definition of the job stream.
        * jobStreamId `string`: Gets or sets the id of the job stream.
        * streamText `string`: Gets or sets the stream text.
        * streamType `string` (values: Progress, Output, Warning, Error, Debug, Verbose, Any): Gets or sets the stream type.
        * summary `string`: Gets or sets the summary.
        * time `string`: Gets or sets the creation time of the job.
        * value `object`: Gets or sets the values of the job stream.

### TestJobStreams_Get
Retrieve a test job stream of the test job identified by runbook name and stream id.


```js
azure_automation_runbook.TestJobStreams_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "jobStreamId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The runbook name.
  * jobStreamId **required** `string`: The job stream id.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the job stream.
  * id `string`: Gets or sets the id of the resource.
  * properties `object`: Definition of the job stream.
    * jobStreamId `string`: Gets or sets the id of the job stream.
    * streamText `string`: Gets or sets the stream text.
    * streamType `string` (values: Progress, Output, Warning, Error, Debug, Verbose, Any): Gets or sets the stream type.
    * summary `string`: Gets or sets the summary.
    * time `string`: Gets or sets the creation time of the job.
    * value `object`: Gets or sets the values of the job stream.

### TestJob_Suspend
Suspend the test job.


```js
azure_automation_runbook.TestJob_Suspend({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The runbook name.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### RunbookDraft_UndoEdit
Undo draft edit to last known published state identified by runbook name.


```js
azure_automation_runbook.RunbookDraft_UndoEdit({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The runbook name.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: The response model for the undoedit runbook operation.
  * requestId `string`
  * statusCode `string` (values: Continue, SwitchingProtocols, OK, Created, Accepted, NonAuthoritativeInformation, NoContent, ResetContent, PartialContent, MultipleChoices, Ambiguous, MovedPermanently, Moved, Found, Redirect, SeeOther, RedirectMethod, NotModified, UseProxy, Unused, TemporaryRedirect, RedirectKeepVerb, BadRequest, Unauthorized, PaymentRequired, Forbidden, NotFound, MethodNotAllowed, NotAcceptable, ProxyAuthenticationRequired, RequestTimeout, Conflict, Gone, LengthRequired, PreconditionFailed, RequestEntityTooLarge, RequestUriTooLong, UnsupportedMediaType, RequestedRangeNotSatisfiable, ExpectationFailed, UpgradeRequired, InternalServerError, NotImplemented, BadGateway, ServiceUnavailable, GatewayTimeout, HttpVersionNotSupported)



## Definitions

*This integration has no definitions*
