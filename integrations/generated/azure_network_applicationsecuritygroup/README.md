# @datafire/azure_network_applicationsecuritygroup

Client library for NetworkManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_network_applicationsecuritygroup
```
```js
let azure_network_applicationsecuritygroup = require('@datafire/azure_network_applicationsecuritygroup').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_network_applicationsecuritygroup.ApplicationSecurityGroups_ListAll({
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Microsoft Azure Network management API provides a RESTful set of web services that interact with Microsoft Azure Networks service to manage your network resources. The API has entities that capture the relationship between an end user and the Microsoft Azure Networks service.

## Actions

### ApplicationSecurityGroups_ListAll
Gets all application security groups in a subscription.


```js
azure_network_applicationsecuritygroup.ApplicationSecurityGroups_ListAll({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ApplicationSecurityGroupListResult](#applicationsecuritygrouplistresult)

### ApplicationSecurityGroups_List
Gets all the application security groups in a resource group.


```js
azure_network_applicationsecuritygroup.ApplicationSecurityGroups_List({
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
* output [ApplicationSecurityGroupListResult](#applicationsecuritygrouplistresult)

### ApplicationSecurityGroups_Delete
Deletes the specified application security group.


```js
azure_network_applicationsecuritygroup.ApplicationSecurityGroups_Delete({
  "resourceGroupName": "",
  "applicationSecurityGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * applicationSecurityGroupName **required** `string`: The name of the application security group.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ApplicationSecurityGroups_Get
Gets information about the specified application security group.


```js
azure_network_applicationsecuritygroup.ApplicationSecurityGroups_Get({
  "resourceGroupName": "",
  "applicationSecurityGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * applicationSecurityGroupName **required** `string`: The name of the application security group.
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ApplicationSecurityGroup](#applicationsecuritygroup)

### ApplicationSecurityGroups_CreateOrUpdate
Creates or updates an application security group.


```js
azure_network_applicationsecuritygroup.ApplicationSecurityGroups_CreateOrUpdate({
  "resourceGroupName": "",
  "applicationSecurityGroupName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * applicationSecurityGroupName **required** `string`: The name of the application security group.
  * parameters **required** [ApplicationSecurityGroup](#applicationsecuritygroup)
  * api-version **required** `string`: Client API version.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ApplicationSecurityGroup](#applicationsecuritygroup)



## Definitions

### ApplicationSecurityGroup
* ApplicationSecurityGroup `object`: An application security group in a resource group.
  * etag `string`: A unique read-only string that changes whenever the resource is updated.
  * properties [ApplicationSecurityGroupPropertiesFormat](#applicationsecuritygrouppropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ApplicationSecurityGroupListResult
* ApplicationSecurityGroupListResult `object`: A list of application security groups.
  * nextLink `string`: The URL to get the next set of results.
  * value `array`: A list of application security groups.
    * items [ApplicationSecurityGroup](#applicationsecuritygroup)

### ApplicationSecurityGroupPropertiesFormat
* ApplicationSecurityGroupPropertiesFormat `object`: Application security group properties.
  * provisioningState `string`: The provisioning state of the application security group resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
  * resourceGuid `string`: The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.


