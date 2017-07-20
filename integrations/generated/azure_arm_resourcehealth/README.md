# @datafire/azure_arm_resourcehealth

Client library for Microsoft.ResourceHealth

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_resourcehealth
```

```js
let datafire = require('datafire');
let azure_arm_resourcehealth = require('@datafire/azure_arm_resourcehealth').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    azure_arm_resourcehealth: account,
  }
})


azure_arm_resourcehealth.Operations_List({}, context).then(data => {
  console.log(data);
})
```

## Description
The Resource Health Client.

## Actions
### Operations_List
Lists available operations for the resourcehealth resource provider


```js
azure_arm_resourcehealth.Operations_List({
  "api-version": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.

### AvailabilityStatuses_ListBySubscriptionId
Lists the current availability status for all the resources in the subscription. Use the nextLink property in the response to get the next page of availability statuses.


```js
azure_arm_resourcehealth.AvailabilityStatuses_ListBySubscriptionId({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* $filter (string) - The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* $expand (string) - Setting $expand=recommendedactions in url query expands the recommendedactions in the response.

### AvailabilityStatuses_ListByResourceGroup
Lists the current availability status for all the resources in the resource group. Use the nextLink property in the response to get the next page of availability statuses.


```js
azure_arm_resourcehealth.AvailabilityStatuses_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* resourceGroupName (string) **required** - The name of the resource group.
* api-version (string) **required** - Client Api Version.
* $filter (string) - The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
* $expand (string) - Setting $expand=recommendedactions in url query expands the recommendedactions in the response.

### Availabilitystatuses_List
Lists the historical availability statuses for a single resource. Use the nextLink property in the response to get the next page of availability status


```js
azure_arm_resourcehealth.Availabilitystatuses_List({
  "resourceUri": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceUri (string) **required** - The fully qualified ID of the resource, including the resource name and resource type. Currently the API support not nested and one nesting level resource types : /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name} and /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
* api-version (string) **required** - Client Api Version.
* $filter (string) - The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
* $expand (string) - Setting $expand=recommendedactions in url query expands the recommendedactions in the response.

### AvailabilityStatus_GetByResource
Gets current availability status for a single resource


```js
azure_arm_resourcehealth.AvailabilityStatus_GetByResource({
  "resourceUri": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceUri (string) **required** - The fully qualified ID of the resource, including the resource name and resource type. Currently the API support not nested and one nesting level resource types : /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name} and /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
* api-version (string) **required** - Client Api Version.
* $filter (string) - The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
* $expand (string) - Setting $expand=recommendedactions in url query expands the recommendedactions in the response.

