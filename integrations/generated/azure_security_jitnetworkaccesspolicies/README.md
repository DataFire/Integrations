# @datafire/azure_security_jitnetworkaccesspolicies

Client library for Security Center

## Installation and Usage
```bash
npm install --save @datafire/azure_security_jitnetworkaccesspolicies
```
```js
let azure_security_jitnetworkaccesspolicies = require('@datafire/azure_security_jitnetworkaccesspolicies').create({
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

### JitNetworkAccessPolicies_List
Policies for protecting resources using Just-in-Time access control.


```js
azure_security_jitnetworkaccesspolicies.JitNetworkAccessPolicies_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID
  * api-version **required** `string`: API version for the operation

#### Output
* output [JitNetworkAccessPoliciesList](#jitnetworkaccesspolicieslist)

### JitNetworkAccessPolicies_ListByRegion
Policies for protecting resources using Just-in-Time access control for the subscription, location


```js
azure_security_jitnetworkaccesspolicies.JitNetworkAccessPolicies_ListByRegion({
  "subscriptionId": "",
  "ascLocation": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations
  * api-version **required** `string`: API version for the operation

#### Output
* output [JitNetworkAccessPoliciesList](#jitnetworkaccesspolicieslist)

### JitNetworkAccessPolicies_ListByResourceGroup
Policies for protecting resources using Just-in-Time access control for the subscription, location


```js
azure_security_jitnetworkaccesspolicies.JitNetworkAccessPolicies_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * api-version **required** `string`: API version for the operation

#### Output
* output [JitNetworkAccessPoliciesList](#jitnetworkaccesspolicieslist)

### JitNetworkAccessPolicies_ListByResourceGroupAndRegion
Policies for protecting resources using Just-in-Time access control for the subscription, location


```js
azure_security_jitnetworkaccesspolicies.JitNetworkAccessPolicies_ListByResourceGroupAndRegion({
  "subscriptionId": "",
  "resourceGroupName": "",
  "ascLocation": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations
  * api-version **required** `string`: API version for the operation

#### Output
* output [JitNetworkAccessPoliciesList](#jitnetworkaccesspolicieslist)

### JitNetworkAccessPolicies_Delete
Delete a Just-in-Time access control policy.


```js
azure_security_jitnetworkaccesspolicies.JitNetworkAccessPolicies_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "ascLocation": "",
  "jitNetworkAccessPolicyName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations
  * jitNetworkAccessPolicyName **required** `string`: Name of a Just-in-Time access configuration policy.
  * api-version **required** `string`: API version for the operation

#### Output
*Output schema unknown*

### JitNetworkAccessPolicies_Get
Policies for protecting resources using Just-in-Time access control for the subscription, location


```js
azure_security_jitnetworkaccesspolicies.JitNetworkAccessPolicies_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "ascLocation": "",
  "jitNetworkAccessPolicyName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations
  * jitNetworkAccessPolicyName **required** `string`: Name of a Just-in-Time access configuration policy.
  * api-version **required** `string`: API version for the operation

#### Output
* output [JitNetworkAccessPolicy](#jitnetworkaccesspolicy)

### JitNetworkAccessPolicies_CreateOrUpdate
Create a policy for protecting resources using Just-in-Time access control


```js
azure_security_jitnetworkaccesspolicies.JitNetworkAccessPolicies_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "ascLocation": "",
  "jitNetworkAccessPolicyName": "",
  "api-version": "",
  "body": {
    "properties": {
      "virtualMachines": []
    }
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations
  * jitNetworkAccessPolicyName **required** `string`: Name of a Just-in-Time access configuration policy.
  * api-version **required** `string`: API version for the operation
  * body **required** [JitNetworkAccessPolicy](#jitnetworkaccesspolicy)

#### Output
* output [JitNetworkAccessPolicy](#jitnetworkaccesspolicy)

### JitNetworkAccessPolicies_Initiate
Initiate a JIT access from a specific Just-in-Time policy configuration.


```js
azure_security_jitnetworkaccesspolicies.JitNetworkAccessPolicies_Initiate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "ascLocation": "",
  "jitNetworkAccessPolicyName": "",
  "jitNetworkAccessPolicyInitiateType": "",
  "api-version": "",
  "body": {
    "virtualMachines": []
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations
  * jitNetworkAccessPolicyName **required** `string`: Name of a Just-in-Time access configuration policy.
  * jitNetworkAccessPolicyInitiateType **required** `string` (values: initiate): Type of the action to do on the Just-in-Time access policy.
  * api-version **required** `string`: API version for the operation
  * body **required** [JitNetworkAccessPolicyInitiateRequest](#jitnetworkaccesspolicyinitiaterequest)

#### Output
* output [JitNetworkAccessRequest](#jitnetworkaccessrequest)



## Definitions

### JitNetworkAccessPoliciesList
* JitNetworkAccessPoliciesList `object`
  * nextLink `string`: The URI to fetch the next page.
  * value `array`
    * items [JitNetworkAccessPolicy](#jitnetworkaccesspolicy)

### JitNetworkAccessPolicy
* JitNetworkAccessPolicy `object`
  * properties **required** [JitNetworkAccessPolicyProperties](#jitnetworkaccesspolicyproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type
  * kind `string`: Kind of the resource
  * location `string`: Location where the resource is stored

### JitNetworkAccessPolicyInitiatePort
* JitNetworkAccessPolicyInitiatePort `object`
  * allowedSourceAddressPrefix `string`: Source of the allowed traffic. If omitted, the request will be for the source IP address of the initiate request.
  * endTimeUtc **required** `string`: The time to close the request in UTC
  * number **required** [PortNumber](#portnumber)

### JitNetworkAccessPolicyInitiateRequest
* JitNetworkAccessPolicyInitiateRequest `object`
  * justification `string`: The justification for making the initiate request
  * virtualMachines **required** `array`: A list of virtual machines & ports to open access for
    * items [JitNetworkAccessPolicyInitiateVirtualMachine](#jitnetworkaccesspolicyinitiatevirtualmachine)

### JitNetworkAccessPolicyInitiateVirtualMachine
* JitNetworkAccessPolicyInitiateVirtualMachine `object`
  * id **required** `string`: Resource ID of the virtual machine that is linked to this policy
  * ports **required** `array`: The ports to open for the resource with the `id`
    * items [JitNetworkAccessPolicyInitiatePort](#jitnetworkaccesspolicyinitiateport)

### JitNetworkAccessPolicyProperties
* JitNetworkAccessPolicyProperties `object`
  * provisioningState `string`: Gets the provisioning state of the Just-in-Time policy.
  * requests `array`
    * items [JitNetworkAccessRequest](#jitnetworkaccessrequest)
  * virtualMachines **required** `array`: Configurations for Microsoft.Compute/virtualMachines resource type.
    * items [JitNetworkAccessPolicyVirtualMachine](#jitnetworkaccesspolicyvirtualmachine)

### JitNetworkAccessPolicyVirtualMachine
* JitNetworkAccessPolicyVirtualMachine `object`
  * id **required** `string`: Resource ID of the virtual machine that is linked to this policy
  * ports **required** `array`: Port configurations for the virtual machine
    * items [JitNetworkAccessPortRule](#jitnetworkaccessportrule)
  * publicIpAddress `string`: Public IP address of the Azure Firewall that is linked to this policy, if applicable

### JitNetworkAccessPortRule
* JitNetworkAccessPortRule `object`
  * allowedSourceAddressPrefix `string`: Mutually exclusive with the "allowedSourceAddressPrefixes" parameter. Should be an IP address or CIDR, for example "192.168.0.3" or "192.168.0.0/16".
  * allowedSourceAddressPrefixes `array`: Mutually exclusive with the "allowedSourceAddressPrefix" parameter.
    * items `string`: IP address or CIDR, for example "192.168.0.3" or "192.168.0.0/16".
  * maxRequestAccessDuration **required** `string`: Maximum duration requests can be made for. In ISO 8601 duration format. Minimum 5 minutes, maximum 1 day
  * number **required** [PortNumber](#portnumber)
  * protocol **required** `string` (values: TCP, UDP, *)

### JitNetworkAccessRequest
* JitNetworkAccessRequest `object`
  * justification `string`: The justification for making the initiate request
  * requestor **required** `string`: The identity of the person who made the request
  * startTimeUtc **required** `string`: The start time of the request in UTC
  * virtualMachines **required** `array`
    * items [JitNetworkAccessRequestVirtualMachine](#jitnetworkaccessrequestvirtualmachine)

### JitNetworkAccessRequestPort
* JitNetworkAccessRequestPort `object`
  * allowedSourceAddressPrefix `string`: Mutually exclusive with the "allowedSourceAddressPrefixes" parameter. Should be an IP address or CIDR, for example "192.168.0.3" or "192.168.0.0/16".
  * allowedSourceAddressPrefixes `array`: Mutually exclusive with the "allowedSourceAddressPrefix" parameter.
    * items `string`: IP address or CIDR, for example "192.168.0.3" or "192.168.0.0/16".
  * endTimeUtc **required** `string`: The date & time at which the request ends in UTC
  * mappedPort `integer`: The port which is mapped to this port's `number` in the Azure Firewall, if applicable
  * number **required** [PortNumber](#portnumber)
  * status **required** `string` (values: Revoked, Initiated): The status of the port
  * statusReason **required** `string` (values: Expired, UserRequested, NewerRequestInitiated): A description of why the `status` has its value

### JitNetworkAccessRequestVirtualMachine
* JitNetworkAccessRequestVirtualMachine `object`
  * id **required** `string`: Resource ID of the virtual machine that is linked to this policy
  * ports **required** `array`: The ports that were opened for the virtual machine
    * items [JitNetworkAccessRequestPort](#jitnetworkaccessrequestport)

### PortNumber
* PortNumber `integer`


