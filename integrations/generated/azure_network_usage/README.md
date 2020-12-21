# @datafire/azure_network_usage

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_usage
```
```js
let azure_network_usage = require('@datafire/azure_network_usage').create({
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

The Microsoft Azure Network management API provides a RESTful set of web services that interact with Microsoft Azure Networks service to manage your network resources. The API has entities that capture the relationship between an end user and the Microsoft Azure Networks service.

## Actions

### Usages_List
List network usages for a subscription.


```js
azure_network_usage.Usages_List({
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location where resource usage is queried.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [UsagesListResult](#usageslistresult)



## Definitions

### Usage
* Usage `object`: Describes network resource usage.
  * currentValue **required** `integer`: The current value of the usage.
  * id `string`: Resource identifier.
  * limit **required** `integer`: The limit of usage.
  * name **required** [UsageName](#usagename)
  * unit **required** `string` (values: Count): An enum describing the unit of measurement.

### UsageName
* UsageName `object`: The usage names.
  * localizedValue `string`: A localized string describing the resource name.
  * value `string`: A string describing the resource name.

### UsagesListResult
* UsagesListResult `object`: The list usages operation response.
  * nextLink `string`: URL to get the next set of results.
  * value `array`: The list network resource usages.
    * items [Usage](#usage)


