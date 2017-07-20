# @datafire/azure_arm_appinsights

Client library for AppInsightsManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_appinsights
```

```js
let datafire = require('datafire');
let azure_arm_appinsights = require('@datafire/azure_arm_appinsights').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    azure_arm_appinsights: account,
  }
})


azure_arm_appinsights.Operations_List({}, context).then(data => {
  console.log(data);
})
```

## Description
Azure Application Insights client for web test based alerting.

## Actions
### Operations_List
Lists all of the available insights REST API operations.


```js
azure_arm_appinsights.Operations_List({
  "api-version": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.

