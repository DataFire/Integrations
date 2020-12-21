# @datafire/azure_network_azurefirewallfqdntag

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_azurefirewallfqdntag
```
```js
let azure_network_azurefirewallfqdntag = require('@datafire/azure_network_azurefirewallfqdntag').create({
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

### AzureFirewallFqdnTags_ListAll
Gets all the Azure Firewall FQDN Tags in a subscription.


```js
azure_network_azurefirewallfqdntag.AzureFirewallFqdnTags_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AzureFirewallFqdnTagListResult](#azurefirewallfqdntaglistresult)



## Definitions

### AzureFirewallFqdnTag
* AzureFirewallFqdnTag `object`: Azure Firewall FQDN Tag Resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [AzureFirewallFqdnTagPropertiesFormat](#azurefirewallfqdntagpropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### AzureFirewallFqdnTagListResult
* AzureFirewallFqdnTagListResult `object`: Response for ListAzureFirewallFqdnTags API service call.
  * nextLink `string`: URL to get the next set of results.
  * value `array`: List of Azure Firewall FQDN Tags in a resource group.
    * items [AzureFirewallFqdnTag](#azurefirewallfqdntag)

### AzureFirewallFqdnTagPropertiesFormat
* AzureFirewallFqdnTagPropertiesFormat `object`: Azure Firewall FQDN Tag Properties.
  * fqdnTagName `string`: The name of this FQDN Tag.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.


