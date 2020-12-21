# @datafire/azure_automation_watcher

Client library for AutomationManagement

## Installation and Usage
```bash
npm install --save @datafire/azure_automation_watcher
```
```js
let azure_automation_watcher = require('@datafire/azure_automation_watcher').create({
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

### Watcher_ListByAutomationAccount
Retrieve a list of watchers.


```js
azure_automation_watcher.Watcher_ListByAutomationAccount({
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
* output [WatcherListResult](#watcherlistresult)

### Watcher_Delete
Delete the watcher by name.


```js
azure_automation_watcher.Watcher_Delete({
  "resourceGroupName": "",
  "automationAccountName": "",
  "watcherName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * watcherName **required** `string`: The watcher name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Watcher_Get
Retrieve the watcher identified by watcher name.


```js
azure_automation_watcher.Watcher_Get({
  "resourceGroupName": "",
  "automationAccountName": "",
  "watcherName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * watcherName **required** `string`: The watcher name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Watcher](#watcher)

### Watcher_Update
Update the watcher identified by watcher name.


```js
azure_automation_watcher.Watcher_Update({
  "resourceGroupName": "",
  "automationAccountName": "",
  "watcherName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * watcherName **required** `string`: The watcher name.
  * parameters **required** [WatcherUpdateParameters](#watcherupdateparameters)
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Watcher](#watcher)

### Watcher_CreateOrUpdate
Create the watcher identified by watcher name.


```js
azure_automation_watcher.Watcher_CreateOrUpdate({
  "resourceGroupName": "",
  "automationAccountName": "",
  "watcherName": "",
  "parameters": null,
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * watcherName **required** `string`: The watcher name.
  * parameters **required** [Watcher](#watcher)
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [Watcher](#watcher)

### Watcher_Start
Resume the watcher identified by watcher name.


```js
azure_automation_watcher.Watcher_Start({
  "resourceGroupName": "",
  "automationAccountName": "",
  "watcherName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * watcherName **required** `string`: The watcher name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### Watcher_Stop
Resume the watcher identified by watcher name.


```js
azure_automation_watcher.Watcher_Stop({
  "resourceGroupName": "",
  "automationAccountName": "",
  "watcherName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * watcherName **required** `string`: The watcher name.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*



## Definitions

### Watcher
* Watcher `object`: Definition of the watcher type.
  * etag `string`: Gets or sets the etag of the resource.
  * properties [WatcherProperties](#watcherproperties)
  * location `string`: The Azure Region where the resource lives
  * tags `object`: Resource tags.
  * id `string`: Fully qualified resource Id for the resource
  * name `string`: The name of the resource
  * type `string`: The type of the resource.

### WatcherListResult
* WatcherListResult `object`: The response model for the list watcher operation.
  * nextLink `string`: Gets or sets the next link.
  * value `array`: Gets or sets a list of watchers.
    * items [Watcher](#watcher)

### WatcherProperties
* WatcherProperties `object`: Definition of the watcher properties
  * creationTime `string`: Gets or sets the creation time.
  * description `string`: Gets or sets the description.
  * executionFrequencyInSeconds `integer`: Gets or sets the frequency at which the watcher is invoked.
  * lastModifiedBy `string`: Details of the user who last modified the watcher.
  * lastModifiedTime `string`: Gets or sets the last modified time.
  * scriptName `string`: Gets or sets the name of the script the watcher is attached to, i.e. the name of an existing runbook.
  * scriptParameters `object`: Gets or sets the parameters of the script.
  * scriptRunOn `string`: Gets or sets the name of the hybrid worker group the watcher will run on.
  * status `string`: Gets the current status of the watcher.

### WatcherUpdateParameters
* WatcherUpdateParameters `object`
  * name `string`: Gets or sets the name of the resource.
  * properties [WatcherUpdateProperties](#watcherupdateproperties)

### WatcherUpdateProperties
* WatcherUpdateProperties `object`: The properties of the update watcher operation.
  * executionFrequencyInSeconds `integer`: Gets or sets the frequency at which the watcher is invoked.


