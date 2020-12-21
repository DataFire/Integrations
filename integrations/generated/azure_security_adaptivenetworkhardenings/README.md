# @datafire/azure_security_adaptivenetworkhardenings

Client library for Security Center

## Installation and Usage
```bash
npm install --save @datafire/azure_security_adaptivenetworkhardenings
```
```js
let azure_security_adaptivenetworkhardenings = require('@datafire/azure_security_adaptivenetworkhardenings').create({
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

API spec for Microsoft.Security (Azure Security Center) resource provider

## Actions

### AdaptiveNetworkHardenings_ListByExtendedResource
Gets a list of Adaptive Network Hardenings resources in scope of an extended resource.


```js
azure_security_adaptivenetworkhardenings.AdaptiveNetworkHardenings_ListByExtendedResource({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceNamespace": "",
  "resourceType": "",
  "resourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * resourceNamespace **required** `string`: The Namespace of the resource.
  * resourceType **required** `string`: The type of the resource.
  * resourceName **required** `string`: Name of the resource.
  * api-version **required** `string`: API version for the operation

#### Output
* output [AdaptiveNetworkHardeningsList](#adaptivenetworkhardeningslist)

### AdaptiveNetworkHardenings_Get
Gets a single Adaptive Network Hardening resource


```js
azure_security_adaptivenetworkhardenings.AdaptiveNetworkHardenings_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceNamespace": "",
  "resourceType": "",
  "resourceName": "",
  "adaptiveNetworkHardeningResourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * resourceNamespace **required** `string`: The Namespace of the resource.
  * resourceType **required** `string`: The type of the resource.
  * resourceName **required** `string`: Name of the resource.
  * adaptiveNetworkHardeningResourceName **required** `string`: The name of the Adaptive Network Hardening resource.
  * api-version **required** `string`: API version for the operation

#### Output
* output [AdaptiveNetworkHardening](#adaptivenetworkhardening)

### AdaptiveNetworkHardenings_Enforce
Enforces the given rules on the NSG(s) listed in the request


```js
azure_security_adaptivenetworkhardenings.AdaptiveNetworkHardenings_Enforce({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceNamespace": "",
  "resourceType": "",
  "resourceName": "",
  "adaptiveNetworkHardeningResourceName": "",
  "adaptiveNetworkHardeningEnforceAction": "",
  "api-version": "",
  "body": {
    "rules": [],
    "networkSecurityGroups": []
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * resourceNamespace **required** `string`: The Namespace of the resource.
  * resourceType **required** `string`: The type of the resource.
  * resourceName **required** `string`: Name of the resource.
  * adaptiveNetworkHardeningResourceName **required** `string`: The name of the Adaptive Network Hardening resource.
  * adaptiveNetworkHardeningEnforceAction **required** `string` (values: enforce): Enforces the given rules on the NSG(s) listed in the request
  * api-version **required** `string`: API version for the operation
  * body **required** [AdaptiveNetworkHardeningEnforceRequest](#adaptivenetworkhardeningenforcerequest)

#### Output
*Output schema unknown*



## Definitions

### AdaptiveNetworkHardening
* AdaptiveNetworkHardening `object`: The resource whose properties describes the Adaptive Network Hardening settings for some Azure resource
  * properties [AdaptiveNetworkHardeningProperties](#adaptivenetworkhardeningproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### AdaptiveNetworkHardeningEnforceRequest
* AdaptiveNetworkHardeningEnforceRequest `object`
  * networkSecurityGroups **required** `array`: The Azure resource IDs of the effective network security groups that will be updated with the created security rules from the Adaptive Network Hardening rules
    * items `string`
  * rules **required** `array`: The rules to enforce
    * items [Rule](#rule)

### AdaptiveNetworkHardeningProperties
* AdaptiveNetworkHardeningProperties `object`: Adaptive Network Hardening resource properties
  * effectiveNetworkSecurityGroups `array`: The Network Security Groups effective on the network interfaces of the protected resource
    * items [EffectiveNetworkSecurityGroups](#effectivenetworksecuritygroups)
  * rules `array`: The security rules which are recommended to be effective on the VM
    * items [Rule](#rule)
  * rulesCalculationTime `string`: The UTC time on which the rules were calculated

### AdaptiveNetworkHardeningsList
* AdaptiveNetworkHardeningsList `object`: Response for ListAdaptiveNetworkHardenings API service call
  * nextLink `string`: The URL to get the next set of results
  * value `array`: A list of Adaptive Network Hardenings resources
    * items [AdaptiveNetworkHardening](#adaptivenetworkhardening)

### EffectiveNetworkSecurityGroups
* EffectiveNetworkSecurityGroups `object`: Describes the Network Security Groups effective on a network interface
  * networkInterface `string`: The Azure resource ID of the network interface
  * networkSecurityGroups `array`: The Network Security Groups effective on the network interface
    * items `string`

### PortNumber
* PortNumber `integer`

### Rule
* Rule `object`: Describes remote addresses that is recommended to communicate with the Azure resource on some (Protocol, Port, Direction). All other remote addresses are recommended to be blocked
  * destinationPort [PortNumber](#portnumber)
  * direction `string` (values: Inbound, Outbound): The rule's direction
  * ipAddresses `array`: The remote IP addresses that should be able to communicate with the Azure resource on the rule's destination port and protocol
    * items `string`
  * name `string`: The name of the rule
  * protocols `array`: The rule's transport protocols
    * items `string` (values: TCP, UDP)


