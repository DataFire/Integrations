# @datafire/azure_automation_dscnodecounts

Client library for AutomationManagement

## Installation and Usage
```bash
npm install --save @datafire/azure_automation_dscnodecounts
```
```js
let azure_automation_dscnodecounts = require('@datafire/azure_automation_dscnodecounts').create({
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

### NodeCountInformation_Get
Retrieve counts for Dsc Nodes.


```js
azure_automation_dscnodecounts.NodeCountInformation_Get({
  "resourceGroupName": "",
  "automationAccountName": "",
  "countType": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * countType **required** `string` (values: status, nodeconfiguration): The type of counts to retrieve
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [NodeCounts](#nodecounts)



## Definitions

### NodeCount
* NodeCount `object`: Number of nodes based on the Filter
  * name `string`: Gets the name of a count type
  * properties [NodeCountProperties](#nodecountproperties)

### NodeCountProperties
* NodeCountProperties `object`
  * count `integer`: Gets the count for the name

### NodeCounts
* NodeCounts `object`: Gets the count of nodes by count type
  * totalCount `integer`: Gets the total number of records matching countType criteria.
  * value `array`: Gets an array of counts
    * items [NodeCount](#nodecount)


