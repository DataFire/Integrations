# @datafire/azure_monitor_metricnamespaces_api

Client library for MonitorManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_monitor_metricnamespaces_api
```
```js
let azure_monitor_metricnamespaces_api = require('@datafire/azure_monitor_metricnamespaces_api').create({
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

### MetricNamespaces_List
Lists the metric namespaces for the resource.


```js
azure_monitor_metricnamespaces_api.MetricNamespaces_List({
  "resourceUri": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The identifier of the resource.
  * api-version **required** `string`: Client Api Version.
  * startTime `string`: The ISO 8601 conform Date start time from which to query for metric namespaces.

#### Output
* output [MetricNamespaceCollection](#metricnamespacecollection)



## Definitions

### ErrorResponse
* ErrorResponse `object`: Describes the format of Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### MetricNamespace
* MetricNamespace `object`: Metric namespace class specifies the metadata for a metric namespace.
  * id `string`: The ID of the metricNamespace.
  * name `string`: The name of the namespace.
  * properties [MetricNamespaceName](#metricnamespacename)
  * type `string`: The type of the namespace.

### MetricNamespaceCollection
* MetricNamespaceCollection `object`: Represents collection of metric namespaces.
  * value **required** `array`: The values for the metric namespaces.
    * items [MetricNamespace](#metricnamespace)

### MetricNamespaceName
* MetricNamespaceName `object`: The fully qualified metric namespace name.
  * metricNamespaceName `string`: The metric namespace name.


