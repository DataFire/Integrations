# @datafire/azure_azsadmin_publicipaddresses

Client library for NetworkAdminManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_azsadmin_publicipaddresses
```
```js
let azure_azsadmin_publicipaddresses = require('@datafire/azure_azsadmin_publicipaddresses').create({
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

Public IP Address admin endpoints and objects.

## Actions

### PublicIPAddresses_List
List of public ip addresses.


```js
azure_azsadmin_publicipaddresses.PublicIPAddresses_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API Version.
  * $filter `string`: OData filter parameter.
  * $orderBy `string`: OData orderBy parameter.
  * $top `string`: OData top parameter.
  * $skip `string`: OData skip parameter.
  * $inlineCount `string`: OData inline count parameter.

#### Output
* output [PublicIpAddressList](#publicipaddresslist)



## Definitions

### PublicIPAddressProperties
* PublicIPAddressProperties `object`: Properties of a public IP Address.
  * allocationMethod `string` (values: Dynamic, Static): The allocation method.
  * ipAddress `string`: The IP address.
  * ipPool `string`: The IP pool.
  * provisioningState `string`: The provisioning state.
  * subscriptionId `string`: The subscription ID.
  * tenantResourceUri `string`: The tenant resource URI.

### PublicIpAddress
* PublicIpAddress `object`: This resource represents an IP Address.
  * properties [PublicIPAddressProperties](#publicipaddressproperties)
  * id `string`: URI of the resource.
  * location `string`: Region location of resource.
  * name `string`: Name of the resource.
  * tags `object`: List of key value pairs.
  * type `string`: Type of resource.

### PublicIpAddressList
* PublicIpAddressList `object`: Pageable list of public ip addresses.
  * nextLink `string`: URI to the next page.
  * value `array`: List of public ip addresses for this page.
    * items [PublicIpAddress](#publicipaddress)


