# @datafire/azure_resources_links

Client library for ManagementLinkClient

## Installation and Usage
```bash
npm install --save @datafire/azure_resources_links
```
```js
let azure_resources_links = require('@datafire/azure_resources_links').create({
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

Azure resources can be linked together to form logical relationships. You can establish links between resources belonging to different resource groups. However, all the linked resources must belong to the same subscription. Each resource can be linked to 50 other resources. If any of the linked resources are deleted or moved, the link owner must clean up the remaining link.

## Actions

### Operations_List
Lists all of the available Microsoft.Resources REST API operations.


```js
azure_resources_links.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for the operation.

#### Output
* output [OperationListResult](#operationlistresult)

### ResourceLinks_ListAtSubscription
Gets all the linked resources for the subscription.


```js
azure_resources_links.ResourceLinks_ListAtSubscription({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: The filter to apply on the list resource links operation. The supported filter for list resource links is targetId. For example, $filter=targetId eq {value}
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ResourceLinkResult](#resourcelinkresult)

### ResourceLinks_Delete
Deletes a resource link with the specified ID.


```js
azure_resources_links.ResourceLinks_Delete({
  "linkId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * linkId **required** `string`: The fully qualified ID of the resource link. Use the format, /subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/{provider-namespace}/{resource-type}/{resource-name}/Microsoft.Resources/links/{link-name}. For example, /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup/Microsoft.Web/sites/mySite/Microsoft.Resources/links/myLink
  * api-version **required** `string`: The API version to use for the operation.

#### Output
*Output schema unknown*

### ResourceLinks_Get
Gets a resource link with the specified ID.


```js
azure_resources_links.ResourceLinks_Get({
  "linkId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * linkId **required** `string`: The fully qualified Id of the resource link. For example, /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup/Microsoft.Web/sites/mySite/Microsoft.Resources/links/myLink
  * api-version **required** `string`: The API version to use for the operation.

#### Output
* output [ResourceLink](#resourcelink)

### ResourceLinks_CreateOrUpdate
Creates or updates a resource link between the specified resources.


```js
azure_resources_links.ResourceLinks_CreateOrUpdate({
  "linkId": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * linkId **required** `string`: The fully qualified ID of the resource link. Use the format, /subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/{provider-namespace}/{resource-type}/{resource-name}/Microsoft.Resources/links/{link-name}. For example, /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup/Microsoft.Web/sites/mySite/Microsoft.Resources/links/myLink
  * parameters **required** [ResourceLink](#resourcelink)
  * api-version **required** `string`: The API version to use for the operation.

#### Output
* output [ResourceLink](#resourcelink)

### ResourceLinks_ListAtSourceScope
Gets a list of resource links at and below the specified source scope.


```js
azure_resources_links.ResourceLinks_ListAtSourceScope({
  "scope": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The fully qualified ID of the scope for getting the resource links. For example, to list resource links at and under a resource group, set the scope to /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup.
  * $filter `string` (values: atScope()): The filter to apply when getting resource links. To get links only at the specified scope (not below the scope), use Filter.atScope().
  * api-version **required** `string`: The API version to use for the operation.

#### Output
* output [ResourceLinkResult](#resourcelinkresult)



## Definitions

### Operation
* Operation `object`: Microsoft.Resources operation
  * display `object`: The object that represents the operation.
    * description `string`: Description of the operation.
    * operation `string`: Operation type: Read, write, delete, etc.
    * provider `string`: Service provider: Microsoft.Resources
    * resource `string`: Resource on which the operation is performed: Profile, endpoint, etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: Result of the request to list Microsoft.Resources operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of Microsoft.Resources operations.
    * items [Operation](#operation)

### ResourceLink
* ResourceLink `object`: The resource link.
  * id `string`: The fully qualified ID of the resource link.
  * name `string`: The name of the resource link.
  * properties [ResourceLinkProperties](#resourcelinkproperties)
  * type `object`: The resource link object.

### ResourceLinkFilter
* ResourceLinkFilter `object`: Resource link filter.
  * targetId **required** `string`: The ID of the target resource.

### ResourceLinkProperties
* ResourceLinkProperties `object`: The resource link properties.
  * notes `string`: Notes about the resource link.
  * sourceId `string`: The fully qualified ID of the source resource in the link. 
  * targetId **required** `string`: The fully qualified ID of the target resource in the link.

### ResourceLinkResult
* ResourceLinkResult `object`: List of resource links.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value **required** `array`: An array of resource links.
    * items [ResourceLink](#resourcelink)


