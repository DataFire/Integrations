# @datafire/azure_network_endpointservice

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_endpointservice
```
```js
let azure_network_endpointservice = require('@datafire/azure_network_endpointservice').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_network_endpointservice.AvailableEndpointServices_List({
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Microsoft Azure Network management API provides a RESTful set of web services that interact with Microsoft Azure Networks service to manage your network resources. The API has entities that capture the relationship between an end user and the Microsoft Azure Networks service.

## Actions

### AvailableEndpointServices_List
List what values of endpoint services are available for use.


```js
azure_network_endpointservice.AvailableEndpointServices_List({
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location to check available endpoint services.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [EndpointServicesListResult](#endpointserviceslistresult)



## Definitions

### EndpointServiceResult
* EndpointServiceResult `object`: Endpoint service.
  * name `string`: Name of the endpoint service.
  * type `string`: Type of the endpoint service.
  * id `string`: Resource ID.

### EndpointServicesListResult
* EndpointServicesListResult `object`: Response for the ListAvailableEndpointServices API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: List of available endpoint services in a region.
    * items [EndpointServiceResult](#endpointserviceresult)


