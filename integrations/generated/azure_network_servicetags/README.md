# @datafire/azure_network_servicetags

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_servicetags
```
```js
let azure_network_servicetags = require('@datafire/azure_network_servicetags').create({
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

### ServiceTags_List
Gets a list of service tag information resources.


```js
azure_network_servicetags.ServiceTags_List({
  "location": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: The location that will be used as a reference for version (not as a filter based on location, you will get the list of service tags with prefix details across all regions but limited to the cloud that your subscription belongs to).
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ServiceTagsListResult](#servicetagslistresult)



## Definitions

### ServiceTagInformation
* ServiceTagInformation `object`: The service tag information.
  * id `string`: The ID of service tag.
  * name `string`: The name of service tag.
  * properties [ServiceTagInformationPropertiesFormat](#servicetaginformationpropertiesformat)

### ServiceTagInformationPropertiesFormat
* ServiceTagInformationPropertiesFormat `object`: Properties of the service tag information.
  * addressPrefixes `array`: The list of IP address prefixes.
    * items `string`
  * changeNumber `string`: The iteration number of service tag.
  * region `string`: The region of service tag.
  * systemService `string`: The name of system service.

### ServiceTagsListResult
* ServiceTagsListResult `object`: Response for the ListServiceTags API service call.
  * changeNumber `string`: The iteration number.
  * cloud `string`: The name of the cloud.
  * id `string`: The ID of the cloud.
  * name `string`: The name of the cloud.
  * type `string`: The azure resource type.
  * values `array`: The list of service tag information resources.
    * items [ServiceTagInformation](#servicetaginformation)


