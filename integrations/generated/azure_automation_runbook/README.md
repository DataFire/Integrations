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

### Runbook_ListByAutomationAccount
Retrieve a list of runbooks.


```js
azure_automation_runbook.Runbook_ListByAutomationAccount({
  "resourceGroupName": "",
  "automationAccountName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
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
      * id `string`: Resource Id
      * location **required** `string`: Resource location
      * name `string`: Resource name
      * tags `object`: Resource tags
      * type `string`: Resource type

### Runbook_Delete
Delete the runbook by name.


```js
azure_automation_runbook.Runbook_Delete({
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The runbook name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Runbook_Get
Retrieve the runbook identified by runbook name.


```js
azure_automation_runbook.Runbook_Get({
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The runbook name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
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
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### Runbook_Update
Update the runbook identified by runbook name.


```js
azure_automation_runbook.Runbook_Update({
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
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
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
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
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### Runbook_CreateOrUpdate
Create the runbook identified by runbook name.


```js
azure_automation_runbook.Runbook_CreateOrUpdate({
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
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
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Runbook_GetContent
Retrieve the content of runbook identified by runbook name.


```js
azure_automation_runbook.Runbook_GetContent({
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The runbook name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `file`

### RunbookDraft_Get
Retrieve the runbook draft identified by runbook name.


```js
azure_automation_runbook.RunbookDraft_Get({
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The runbook name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
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
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The runbook name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `file`

### RunbookDraft_CreateOrUpdate
Updates the runbook draft with runbookStream as its content.


```js
azure_automation_runbook.RunbookDraft_CreateOrUpdate({
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "runbookContent": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The runbook name.
  * runbookContent **required** `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### RunbookDraft_Publish
Publish runbook draft.


```js
azure_automation_runbook.RunbookDraft_Publish({
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The parameters supplied to the publish runbook operation.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
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
  * id `string`: Resource Id
  * location **required** `string`: Resource location
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### TestJobs_Get
Retrieve the test job for the specified runbook.


```js
azure_automation_runbook.TestJobs_Get({
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The runbook name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the test job.
  * creationTime `string`: Gets or sets the creation time of the test job.
  * endTime `string`: Gets or sets the end time of the test job.
  * exception `string`: Gets or sets the exception of the test job.
  * lastModifiedTime `string`: Gets or sets the last modified time of the test job.
  * lastStatusModifiedTime `string`: Gets or sets the last status modified time of the test job.
  * parameters `object`: Gets or sets the parameters of the test job.
  * runOn `string`: Gets or sets the runOn which specifies the group name where the job is to be executed.
  * startTime `string`: Gets or sets the start time of the test job.
  * status `string`: Gets or sets the status of the test job.
  * statusDetails `string`: Gets or sets the status details of the test job.

### TestJobs_Create
Create a test job of the runbook.


```js
azure_automation_runbook.TestJobs_Create({
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The parameters supplied to the create test job operation.
  * parameters **required** `object`: The parameters supplied to the create test job operation.
    * parameters `object`: Gets or sets the parameters of the test job.
    * runOn `string`: Gets or sets the runOn which specifies the group name where the job is to be executed.
    * runbookName **required** `string`: Gets or sets the runbook name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: Definition of the test job.
  * creationTime `string`: Gets or sets the creation time of the test job.
  * endTime `string`: Gets or sets the end time of the test job.
  * exception `string`: Gets or sets the exception of the test job.
  * lastModifiedTime `string`: Gets or sets the last modified time of the test job.
  * lastStatusModifiedTime `string`: Gets or sets the last status modified time of the test job.
  * parameters `object`: Gets or sets the parameters of the test job.
  * runOn `string`: Gets or sets the runOn which specifies the group name where the job is to be executed.
  * startTime `string`: Gets or sets the start time of the test job.
  * status `string`: Gets or sets the status of the test job.
  * statusDetails `string`: Gets or sets the status details of the test job.

### TestJobs_Resume
Resume the test job.


```js
azure_automation_runbook.TestJobs_Resume({
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The runbook name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### TestJobs_Stop
Stop the test job.


```js
azure_automation_runbook.TestJobs_Stop({
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The runbook name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### TestJobStreams_ListByTestJob
Retrieve a list of test job streams identified by runbook name.


```js
azure_automation_runbook.TestJobStreams_ListByTestJob({
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The runbook name.
  * $filter `string`: The filter to apply on the operation.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
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
Retrieve a test job streams identified by runbook name and stream id.


```js
azure_automation_runbook.TestJobStreams_Get({
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "jobStreamId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The runbook name.
  * jobStreamId **required** `string`: The job stream id.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
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

### TestJobs_Suspend
Suspend the test job.


```js
azure_automation_runbook.TestJobs_Suspend({
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The runbook name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### RunbookDraft_UndoEdit
Retrieve the runbook identified by runbook name.


```js
azure_automation_runbook.RunbookDraft_UndoEdit({
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The resource group name.
  * automationAccountName **required** `string`: The automation account name.
  * runbookName **required** `string`: The runbook name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `object`: The response model for the undoedit runbook operation.
  * requestId `string`
  * statusCode `string` (values: Continue, SwitchingProtocols, OK, Created, Accepted, NonAuthoritativeInformation, NoContent, ResetContent, PartialContent, MultipleChoices, Ambiguous, MovedPermanently, Moved, Found, Redirect, SeeOther, RedirectMethod, NotModified, UseProxy, Unused, TemporaryRedirect, RedirectKeepVerb, BadRequest, Unauthorized, PaymentRequired, Forbidden, NotFound, MethodNotAllowed, NotAcceptable, ProxyAuthenticationRequired, RequestTimeout, Conflict, Gone, LengthRequired, PreconditionFailed, RequestEntityTooLarge, RequestUriTooLong, UnsupportedMediaType, RequestedRangeNotSatisfiable, ExpectationFailed, UpgradeRequired, InternalServerError, NotImplemented, BadGateway, ServiceUnavailable, GatewayTimeout, HttpVersionNotSupported)



## Definitions

*This integration has no definitions*
