# @datafire/azure_arm_insights

Client library for InsightsManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_insights
```

```js
let datafire = require('datafire');
let azure_arm_insights = require('@datafire/azure_arm_insights').create();

azure_arm_insights.LogProfiles_List({}).then(data => {
  console.log(data);
})
```

## Description


## Actions
### LogProfiles_List
List the log profiles.


```js
azure_arm_insights.LogProfiles_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - The Azure subscription Id.

### LogProfiles_Delete
Deletes the log profile.


```js
azure_arm_insights.LogProfiles_Delete({
  "logProfileName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* logProfileName (string) **required** - The name of the log profile.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - The Azure subscription Id.

### LogProfiles_Get
Gets the log profile.


```js
azure_arm_insights.LogProfiles_Get({
  "logProfileName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* logProfileName (string) **required** - The name of the log profile.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - The Azure subscription Id.

### LogProfiles_CreateOrUpdate
Create or update a log profile in Azure Monitoring REST API.


```js
azure_arm_insights.LogProfiles_CreateOrUpdate({
  "logProfileName": "",
  "api-version": "",
  "parameters": {
    "properties": null
  },
  "subscriptionId": ""
}, context)
```

#### Parameters
* logProfileName (string) **required** - The name of the log profile.
* api-version (string) **required** - Client Api Version.
* parameters (object) **required** - The log profile resource.
* subscriptionId (string) **required** - The Azure subscription Id.

