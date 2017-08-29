# @datafire/azure_monitor

Client library for MonitorClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_monitor
```

```js
let datafire = require('datafire');
let azure_monitor = require('@datafire/azure_monitor').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

azure_monitor.UsageMetrics_List({}).then(data => {
  console.log(data);
})
```

## Description


## Actions
### UsageMetrics_List
The List operation lists the usage metrics for the resource.<br>**WARNING**: This operation will be *deprecated* in the next release.


```js
azure_monitor.UsageMetrics_List({
  "resourceUri": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceUri (string) **required** - The identifier of the resource.
* api-version (string) **required** - Client Api Version. NOTE: This is not a client property, it must be explicit in the call and there is no default value.
* $filter (string) - The filter to apply on the operation.<br>**WARNING**: $filter not documented since the operation will be deprecated in the next release.

