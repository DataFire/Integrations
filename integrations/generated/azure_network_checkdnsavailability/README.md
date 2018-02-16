# @datafire/azure_network_checkdnsavailability

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_checkdnsavailability
```
```js
let azure_network_checkdnsavailability = require('@datafire/azure_network_checkdnsavailability').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_network_checkdnsavailability.CheckDnsNameAvailability({
  "location": "",
  "domainNameLabel": "",
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Microsoft Azure Network management API provides a RESTful set of web services that interact with Microsoft Azure Networks service to manage your network resources. The API has entities that capture the relationship between an end user and the Microsoft Azure Networks service.

## Actions

### CheckDnsNameAvailability
Checks whether a domain name in the cloudapp.azure.com zone is available for use.


```js
azure_network_checkdnsavailability.CheckDnsNameAvailability({
  "location": "",
  "domainNameLabel": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location of the domain name.
  * domainNameLabel **required** `string`: The domain name to be verified. It must conform to the following regular expression: ^[a-z][a-z0-9-]{1,61}[a-z0-9]$.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DnsNameAvailabilityResult](#dnsnameavailabilityresult)



## Definitions

### DnsNameAvailabilityResult
* DnsNameAvailabilityResult `object`: Response for the CheckDnsNameAvailability API service call.
  * available `boolean`: Domain availability (True/False).


