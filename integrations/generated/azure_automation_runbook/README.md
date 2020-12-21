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

.then(data => {
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
  * automationAccountName **required** `string`: The name of the automation account.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [RunbookListResult](#runbooklistresult)

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
  * automationAccountName **required** `string`: The name of the automation account.
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
  * automationAccountName **required** `string`: The name of the automation account.
  * runbookName **required** `string`: The runbook name.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Runbook](#runbook)

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
  * automationAccountName **required** `string`: The name of the automation account.
  * runbookName **required** `string`: The runbook name.
  * parameters **required** [RunbookUpdateParameters](#runbookupdateparameters)
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Runbook](#runbook)

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
  * automationAccountName **required** `string`: The name of the automation account.
  * runbookName **required** `string`: The runbook name.
  * parameters **required** [RunbookCreateOrUpdateParameters](#runbookcreateorupdateparameters)
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Runbook](#runbook)

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
  * automationAccountName **required** `string`: The name of the automation account.
  * runbookName **required** `string`: The runbook name.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `file`

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
  * automationAccountName **required** `string`: The name of the automation account.
  * runbookName **required** `string`: The runbook name.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [RunbookDraft](#runbookdraft)

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
  * automationAccountName **required** `string`: The name of the automation account.
  * runbookName **required** `string`: The runbook name.
  * api-version **required** `string`: Client Api Version.

#### Output
* output `file`

### RunbookDraft_ReplaceContent
Replaces the runbook draft content.


```js
azure_automation_runbook.RunbookDraft_ReplaceContent({
  "subscriptionId": "",
  "resourceGroupName": "",
  "automationAccountName": "",
  "runbookName": "",
  "runbookContent": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * runbookName **required** `string`: The runbook name.
  * runbookContent **required** `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output `file`

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
  * automationAccountName **required** `string`: The name of the automation account.
  * runbookName **required** `string`: The runbook name.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [TestJob](#testjob)

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
  * automationAccountName **required** `string`: The name of the automation account.
  * runbookName **required** `string`: The parameters supplied to the create test job operation.
  * parameters **required** [TestJobCreateParameters](#testjobcreateparameters)
  * api-version **required** `string`: Client Api Version.

#### Output
* output [TestJob](#testjob)

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
  * automationAccountName **required** `string`: The name of the automation account.
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
  * automationAccountName **required** `string`: The name of the automation account.
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
  * automationAccountName **required** `string`: The name of the automation account.
  * runbookName **required** `string`: The runbook name.
  * $filter `string`: The filter to apply on the operation.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [JobStreamListResult](#jobstreamlistresult)

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
  * automationAccountName **required** `string`: The name of the automation account.
  * runbookName **required** `string`: The runbook name.
  * jobStreamId **required** `string`: The job stream id.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [JobStream](#jobstream)

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
  * automationAccountName **required** `string`: The name of the automation account.
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
  * automationAccountName **required** `string`: The name of the automation account.
  * runbookName **required** `string`: The runbook name.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [RunbookDraftUndoEditResult](#runbookdraftundoeditresult)

### Runbook_Publish
Publish runbook draft.


```js
azure_automation_runbook.Runbook_Publish({
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
  * automationAccountName **required** `string`: The name of the automation account.
  * runbookName **required** `string`: The parameters supplied to the publish runbook operation.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*



## Definitions

### ContentHash
* ContentHash `object`: Definition of the runbook property type.
  * algorithm **required** `string`: Gets or sets the content hash algorithm used to hash the content.
  * value **required** `string`: Gets or sets expected hash value of the content.

### ContentLink
* ContentLink `object`: Definition of the content link.
  * contentHash [ContentHash](#contenthash)
  * uri `string`: Gets or sets the uri of the runbook content.
  * version `string`: Gets or sets the version of the content.

### JobStream
* JobStream `object`: Definition of the job stream.
  * id `string`: Gets or sets the id of the resource.
  * properties [JobStreamProperties](#jobstreamproperties)

### JobStreamListResult
* JobStreamListResult `object`: The response model for the list job stream operation.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: A list of job streams.
    * items [JobStream](#jobstream)

### JobStreamProperties
* JobStreamProperties `object`: Definition of the job stream.
  * jobStreamId `string`: Gets or sets the id of the job stream.
  * streamText `string`: Gets or sets the stream text.
  * streamType `string` (values: Progress, Output, Warning, Error, Debug, Verbose, Any): Gets or sets the stream type.
  * summary `string`: Gets or sets the summary.
  * time `string`: Gets or sets the creation time of the job.
  * value `object`: Gets or sets the values of the job stream.

### Runbook
* Runbook `object`: Definition of the runbook type.
  * etag `string`: Gets or sets the etag of the resource.
  * properties [RunbookProperties](#runbookproperties)
  * location `string`: The Azure Region where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### RunbookCreateOrUpdateDraftParameters
* RunbookCreateOrUpdateDraftParameters `object`: The parameters supplied to the create or update runbook operation.
  * runbookContent **required** `string`: Content of the Runbook.

### RunbookCreateOrUpdateDraftProperties
* RunbookCreateOrUpdateDraftProperties `object`: The parameters supplied to the create or update draft runbook properties.
  * description `string`: Gets or sets the description of the runbook.
  * draft **required** [RunbookDraft](#runbookdraft)
  * logActivityTrace `integer`: Gets or sets the activity-level tracing options of the runbook.
  * logProgress `boolean`: Gets or sets progress log option.
  * logVerbose `boolean`: Gets or sets verbose log option.
  * runbookType **required** `string` (values: Script, Graph, PowerShellWorkflow, PowerShell, GraphPowerShellWorkflow, GraphPowerShell): Gets or sets the type of the runbook.

### RunbookCreateOrUpdateParameters
* RunbookCreateOrUpdateParameters `object`: The parameters supplied to the create or update runbook operation.
  * location `string`: Gets or sets the location of the resource.
  * name `string`: Gets or sets the name of the resource.
  * properties **required** [RunbookCreateOrUpdateProperties](#runbookcreateorupdateproperties)
  * tags `object`: Gets or sets the tags attached to the resource.

### RunbookCreateOrUpdateProperties
* RunbookCreateOrUpdateProperties `object`: The parameters supplied to the create or update runbook properties.
  * description `string`: Gets or sets the description of the runbook.
  * draft [RunbookDraft](#runbookdraft)
  * logActivityTrace `integer`: Gets or sets the activity-level tracing options of the runbook.
  * logProgress `boolean`: Gets or sets progress log option.
  * logVerbose `boolean`: Gets or sets verbose log option.
  * publishContentLink [ContentLink](#contentlink)
  * runbookType **required** `string` (values: Script, Graph, PowerShellWorkflow, PowerShell, GraphPowerShellWorkflow, GraphPowerShell): Gets or sets the type of the runbook.

### RunbookDraft
* RunbookDraft `object`
  * creationTime `string`: Gets or sets the creation time of the runbook draft.
  * draftContentLink [ContentLink](#contentlink)
  * inEdit `boolean`: Gets or sets whether runbook is in edit mode.
  * lastModifiedTime `string`: Gets or sets the last modified time of the runbook draft.
  * outputTypes `array`: Gets or sets the runbook output types.
    * items `string`
  * parameters `object`: Gets or sets the runbook draft parameters.

### RunbookDraftUndoEditResult
* RunbookDraftUndoEditResult `object`: The response model for the undo edit runbook operation.
  * requestId `string`
  * statusCode `string` (values: Continue, SwitchingProtocols, OK, Created, Accepted, NonAuthoritativeInformation, NoContent, ResetContent, PartialContent, MultipleChoices, Ambiguous, MovedPermanently, Moved, Found, Redirect, SeeOther, RedirectMethod, NotModified, UseProxy, Unused, TemporaryRedirect, RedirectKeepVerb, BadRequest, Unauthorized, PaymentRequired, Forbidden, NotFound, MethodNotAllowed, NotAcceptable, ProxyAuthenticationRequired, RequestTimeout, Conflict, Gone, LengthRequired, PreconditionFailed, RequestEntityTooLarge, RequestUriTooLong, UnsupportedMediaType, RequestedRangeNotSatisfiable, ExpectationFailed, UpgradeRequired, InternalServerError, NotImplemented, BadGateway, ServiceUnavailable, GatewayTimeout, HttpVersionNotSupported)

### RunbookListResult
* RunbookListResult `object`: The response model for the list runbook operation.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: Gets or sets a list of runbooks.
    * items [Runbook](#runbook)

### RunbookParameter
* RunbookParameter `object`: Definition of the runbook parameter type.
  * defaultValue `string`: Gets or sets the default value of parameter.
  * isMandatory `boolean`: Gets or sets a Boolean value to indicate whether the parameter is mandatory or not.
  * position `integer`: Get or sets the position of the parameter.
  * type `string`: Gets or sets the type of the parameter.

### RunbookProperties
* RunbookProperties `object`: Definition of the runbook property type.
  * creationTime `string`: Gets or sets the creation time.
  * description `string`: Gets or sets the description.
  * draft [RunbookDraft](#runbookdraft)
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
  * publishContentLink [ContentLink](#contentlink)
  * runbookType `string` (values: Script, Graph, PowerShellWorkflow, PowerShell, GraphPowerShellWorkflow, GraphPowerShell): Gets or sets the type of the runbook.
  * state `string` (values: New, Edit, Published): Gets or sets the state of the runbook.

### RunbookUpdateParameters
* RunbookUpdateParameters `object`: The parameters supplied to the update runbook operation.
  * location `string`: Gets or sets the location of the resource.
  * name `string`: Gets or sets the name of the resource.
  * properties [RunbookUpdateProperties](#runbookupdateproperties)
  * tags `object`: Gets or sets the tags attached to the resource.

### RunbookUpdateProperties
* RunbookUpdateProperties `object`: The parameters supplied to the update runbook properties.
  * description `string`: Gets or sets the description of the runbook.
  * logActivityTrace `integer`: Gets or sets the activity-level tracing options of the runbook.
  * logProgress `boolean`: Gets or sets progress log option.
  * logVerbose `boolean`: Gets or sets verbose log option.

### TestJob
* TestJob `object`: Definition of the test job.
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

### TestJobCreateParameters
* TestJobCreateParameters `object`: The parameters supplied to the create test job operation.
  * parameters `object`: Gets or sets the parameters of the test job.
  * runOn `string`: Gets or sets the runOn which specifies the group name where the job is to be executed.


