# @datafire/azure_network_ddoscustompolicy

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_ddoscustompolicy
```
```js
let azure_network_ddoscustompolicy = require('@datafire/azure_network_ddoscustompolicy').create({
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

### DdosCustomPolicies_Delete
Deletes the specified DDoS custom policy.


```js
azure_network_ddoscustompolicy.DdosCustomPolicies_Delete({
  "resourceGroupName": "",
  "ddosCustomPolicyName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * ddosCustomPolicyName **required** `string`: The name of the DDoS custom policy.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### DdosCustomPolicies_Get
Gets information about the specified DDoS custom policy.


```js
azure_network_ddoscustompolicy.DdosCustomPolicies_Get({
  "resourceGroupName": "",
  "ddosCustomPolicyName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * ddosCustomPolicyName **required** `string`: The name of the DDoS custom policy.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DdosCustomPolicy](#ddoscustompolicy)

### DdosCustomPolicies_UpdateTags
Update a DDoS custom policy tags.


```js
azure_network_ddoscustompolicy.DdosCustomPolicies_UpdateTags({
  "resourceGroupName": "",
  "ddosCustomPolicyName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * ddosCustomPolicyName **required** `string`: The name of the DDoS custom policy.
  * parameters **required** `object`: Tags object for patch operations.
    * tags `object`: Resource tags.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DdosCustomPolicy](#ddoscustompolicy)

### DdosCustomPolicies_CreateOrUpdate
Creates or updates a DDoS custom policy.


```js
azure_network_ddoscustompolicy.DdosCustomPolicies_CreateOrUpdate({
  "resourceGroupName": "",
  "ddosCustomPolicyName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * ddosCustomPolicyName **required** `string`: The name of the DDoS custom policy.
  * parameters **required** [DdosCustomPolicy](#ddoscustompolicy)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DdosCustomPolicy](#ddoscustompolicy)



## Definitions

### CloudError
* CloudError `object`: An error response from the Batch service.
  * error [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`: An error response from the Batch service.
  * code `string`: An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
  * details `array`: A list of additional details about the error.
    * items [CloudErrorBody](#clouderrorbody)
  * message `string`: A message describing the error, intended to be suitable for display in a user interface.
  * target `string`: The target of the particular error. For example, the name of the property in error.

### DdosCustomPolicy
* DdosCustomPolicy `object`: A DDoS custom policy in a resource group.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [DdosCustomPolicyPropertiesFormat](#ddoscustompolicypropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### DdosCustomPolicyPropertiesFormat
* DdosCustomPolicyPropertiesFormat `object`: DDoS custom policy properties.
  * protocolCustomSettings `array`: The protocol-specific DDoS policy customization parameters.
    * items [ProtocolCustomSettingsFormat](#protocolcustomsettingsformat)
  * provisioningState `string` (values: Succeeded, Updating, Deleting, Failed): The current provisioning state.
  * publicIPAddresses `array`: The list of public IPs associated with the DDoS custom policy resource. This list is read-only.
    * items `object`: Reference to another subresource.
      * id `string`: Resource ID.
  * resourceGuid `string`: The resource GUID property of the DDoS custom policy resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.

### ProtocolCustomSettingsFormat
* ProtocolCustomSettingsFormat `object`: DDoS custom policy properties.
  * protocol `string` (values: Tcp, Udp, Syn): The protocol for which the DDoS protection policy is being customized.
  * sourceRateOverride `string`: The customized DDoS protection source rate.
  * triggerRateOverride `string`: The customized DDoS protection trigger rate.
  * triggerSensitivityOverride `string` (values: Relaxed, Low, Default, High): The customized DDoS protection trigger rate sensitivity degrees. High: Trigger rate set with most sensitivity w.r.t. normal traffic. Default: Trigger rate set with moderate sensitivity w.r.t. normal traffic. Low: Trigger rate set with less sensitivity w.r.t. normal traffic. Relaxed: Trigger rate set with least sensitivity w.r.t. normal traffic.


