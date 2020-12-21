# @datafire/azure_network_natgateway

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_natgateway
```
```js
let azure_network_natgateway = require('@datafire/azure_network_natgateway').create({
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

### NatGateways_ListAll
Gets all the Nat Gateways in a subscription.


```js
azure_network_natgateway.NatGateways_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NatGatewayListResult](#natgatewaylistresult)

### NatGateways_List
Gets all nat gateways in a resource group.


```js
azure_network_natgateway.NatGateways_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NatGatewayListResult](#natgatewaylistresult)

### NatGateways_Delete
Deletes the specified nat gateway.


```js
azure_network_natgateway.NatGateways_Delete({
  "resourceGroupName": "",
  "natGatewayName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * natGatewayName **required** `string`: The name of the nat gateway.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### NatGateways_Get
Gets the specified nat gateway in a specified resource group.


```js
azure_network_natgateway.NatGateways_Get({
  "resourceGroupName": "",
  "natGatewayName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * natGatewayName **required** `string`: The name of the nat gateway.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * $expand `string`: Expands referenced resources.

#### Output
* output [NatGateway](#natgateway)

### NatGateways_UpdateTags
Updates nat gateway tags.


```js
azure_network_natgateway.NatGateways_UpdateTags({
  "resourceGroupName": "",
  "natGatewayName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * natGatewayName **required** `string`: The name of the nat gateway.
  * parameters **required** `object`: Tags object for patch operations.
    * tags `object`: Resource tags.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NatGateway](#natgateway)

### NatGateways_CreateOrUpdate
Creates or updates a nat gateway.


```js
azure_network_natgateway.NatGateways_CreateOrUpdate({
  "resourceGroupName": "",
  "natGatewayName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * natGatewayName **required** `string`: The name of the nat gateway.
  * parameters **required** [NatGateway](#natgateway)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [NatGateway](#natgateway)



## Definitions

### NatGateway
* NatGateway `object`: Nat Gateway resource.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [NatGatewayPropertiesFormat](#natgatewaypropertiesformat)
  * sku [NatGatewaySku](#natgatewaysku)
  * zones `array`: A list of availability zones denoting the zone in which Nat Gateway should be deployed.
    * items `string`
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### NatGatewayListResult
* NatGatewayListResult `object`: Response for ListNatGateways API service call.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of Nat Gateways that exists in a resource group.
    * items [NatGateway](#natgateway)

### NatGatewayPropertiesFormat
* NatGatewayPropertiesFormat `object`: Nat Gateway properties.
  * idleTimeoutInMinutes `integer`: The idle timeout of the nat gateway.
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * publicIpAddresses `array`: An array of public ip addresses associated with the nat gateway resource.
    * items `object`: Reference to another subresource.
      * id `string`: Resource ID.
  * publicIpPrefixes `array`: An array of public ip prefixes associated with the nat gateway resource.
    * items `object`: Reference to another subresource.
      * id `string`: Resource ID.
  * resourceGuid `string`: The resource GUID property of the NAT gateway resource.
  * subnets `array`: An array of references to the subnets using this nat gateway resource.
    * items `object`: Reference to another subresource.
      * id `string`: Resource ID.

### NatGatewaySku
* NatGatewaySku `object`: SKU of nat gateway.
  * name `string` (values: Standard): Name of Nat Gateway SKU.


